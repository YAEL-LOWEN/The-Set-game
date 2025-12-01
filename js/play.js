
const cards = JSON.parse(localStorage.getItem("cards")) || []
const card = document.querySelectorAll(".card")
const pluscard = document.querySelectorAll(".pluscard")
const addCard = document.querySelector(".addCard")
const outOfPlay = document.querySelector(".outOfPlay")
const outOfPlay2 = document.querySelector(".outOfPlay2")
const currentUser = JSON.parse(localStorage.getItem("currentUser"))
const win = document.querySelector(".win")
const lose = document.querySelector(".lose")
const TrueFalse = document.querySelector("#TrueFalse")
const zoop = new Audio("../others/zoop.wav");
const Greatjob = new Audio("../others/CL.WAV");
const SBRIDGE = new Audio("../others/SBRIDGE.wav");
const g = new Audio("../others/g.mp3");
const Howuch = document.querySelector("#Howuch")
let k = 0
const whoami = document.querySelector(".whoami")

//אתחול
whoami.textContent = "👩 welcom " + currentUser.name + "!" +"📞 " + currentUser.phone 
win.textContent = "win: " +currentUser.win
lose.textContent = "lose: " +currentUser.lose

//מערך של הסט הנבחר
let set = []
const addEvent = (element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "red";
    zoop.play()
    if (set.length < 2) {
      set.push(whoismycard(element.textContent));
      Howuch.textContent = "you choose " + set.length + " cards"
    }
    else {
      set.push(whoismycard(element.textContent))
      Howuch.textContent = "you choose " + set.length + " cards"
      itsaset(set)
      console.log(cards);
      console.log(k);
      set = []
    }
  })
}
const startGame = () => {
  card.forEach(element => {
    addEvent(element)
  })
};
startGame();
//תמונות לפי המספרים שהוגרלו
function whoismycard(id) {
  const aaa = cards.filter(element => Number(element.id) === Number(id))
  return aaa
}

// הגרלת 12 מספרים בשביל ההתחלה
const check = []
const random = () => {
  for (let i = 0; i < 12; i++) {
    let a = Math.floor(Math.random() * 81) + 1;
    while (check.includes(a)) {
      a = Math.floor(Math.random() * 81) + 1;
    }
    document.getElementById(i).style.backgroundImage = `url(../img/cards/${a}.png)`;//`url(../img/cards/${a}.png)`
    document.getElementById(i).textContent = a;
    check.push(a)
  }
}
random();

//בדיקת סט
function wrong() {
  TrueFalse.textContent = "wrong 😪"
  SBRIDGE.play()
  currentUser.lose++;
  localStorage.setItem("currentUser", JSON.stringify(currentUser))
  lose.textContent = "lose:" + `${currentUser.lose}`
  for (let i = 0; i < 15; i++) {
  let element = document.getElementById(i);
  element.style.backgroundColor = "gray";
  }
}
function itsaset(set) {
  const a = (set[0][0])
  const b = (set[1][0])
  const c = (set[2][0])
  console.log(a, b, c);
  if ((a.shape === b.shape && b.shape != c.shape) || (a.shape != b.shape && b.shape === c.shape) || (a.shape != c.shape && b.shape === c.shape) || (a.shape === c.shape && b.shape != c.shape)) {
    wrong()
  }
  else
    if ((a.color === b.color && b.color != c.color) || (a.color != b.color && b.color === c.color) || (a.color != c.color && b.color === c.color) || (a.color === c.color && b.color != c.color)) {
      wrong()
    }
    else
      if ((a.amount === b.amount && b.amount != c.amount) || (a.amount != b.amount && b.amount === c.amount) || (a.amount != c.amount && b.amount === c.amount) || (a.amount === c.amount && b.amount != c.amount)) {
        wrong()
      }
      else
        if ((a.filling === b.filling && b.filling != c.filling) || (a.filling != b.filling && b.filling === c.filling) || (a.filling != c.filling && b.filling === c.filling) || (a.filling === c.filling && b.filling != c.filling)) {
          wrong()
        }
        else
          if ((a.id === b.id && b.id != c.id) || (a.id != b.id && b.id === c.id) || (a.id != c.id && b.id === c.id) || (a.id === b.id && b.id === c.id)) {
            wrong()
          }
          else {
            TrueFalse.textContent = "Good 👏"
            Greatjob.play()
            for (let i = 0; i < 15; i++) {
              let element = document.getElementById(i);
              element.style.backgroundColor = "gray";
              }
            cards[Number(a.id)].used = true
            cards[Number(b.id)].used = true
            cards[Number(c.id)].used = true;
            // alert("woooww 👍👍")
            k = k + 1
            currentUser.win++;
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
            win.textContent = "win:" + `${currentUser.win}`
            console.log(currentUser);
            changeCards(set)
          }
}
function Gameover(){
  window.open("gameover.html");
}
function changeCards(set) {
  set.forEach((card) => {
    for (let i = 0; i < check.length; i++) {
      if (card[0].id === check[i]) {
        let startTime = new Date().getTime();
        let a = Math.floor(Math.random() * 81) + 1;
        do {
          if (currentUser.win > 22) {
            alert("gameover 💻💻💻")
            Gameover()
            break;
          }
          a = Math.floor(Math.random() * 81) + 1;
        } while (cards[a].used === true || check.includes(a))
        check[i] = a;
        document.getElementById(i).style.backgroundImage = `url(../img/cards/${a}.png)`;
        document.getElementById(i).textContent = a;
        break;
      }
    }
  })
}
addCard.addEventListener("click", (event) => {
  addTreeCards()
})
const addTreeCards = () => {
  for (let i = 12; i <= 14; i++) {
    let startTime = new Date().getTime();
    let a = Math.floor(Math.random() * 81) + 1;
    do {
      a = Math.floor(Math.random() * 81) + 1;
      if (new Date().getTime() - startTime > 3000) {
        alert("gameover 💻💻💻")
        window.open("enter_page.html");
      }
    } while (cards[a].used === true || check.includes(a))
    let element = document.getElementById(i);
    element.style.display = "inline"
    element.style.backgroundImage = `url(../img/cards/${a}.png)`;
    element.textContent = a;
    element.classList.remove('pluscard')
    element.classList.add('card')
    addEvent(element);
    check[i] = a
  }
  addCard.style.display = "none"
}
outOfPlay.addEventListener("click", (event) => {
  window.open("homepage.html");
})
outOfPlay2.addEventListener("click", (event) => {
  window.open("enter_page.html");
})


