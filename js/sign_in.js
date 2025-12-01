
const sign_in_name = document.querySelector("#sign_in_name")
const sign_in_password = document.querySelector("#sign_in_password")
const sign_in_id = document.querySelector("#sign_in_id")
const sign_in_phone = document.querySelector("#sign_in_phone")
const sign_in_button = document.querySelector("#sign_in_button")
const sign_in_form = document.querySelector(".sign_in_form")
const members = JSON.parse(localStorage.getItem("members")) || []

sign_in_button.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof(sign_in_id.value)===String)
        alert(" .............חובה להזדהות עם ת.ז. מספרית")
    else if (sign_in_password.value.length != 4)
        alert("הסיסמא צריכה להיות בת 4 תויים")
    else if (sign_in_name.value === '')
        alert("חובה להכניס שם משתמש")
    else {
        const findMember = members.find(member => {
            return (Number(member.identity) === Number(sign_in_id.value))
        })
        if (findMember){
            alert("הנך קיים במערכת, אנא נסה שנית")
        }
        else {
            alert("שמחים שהצטרפת אלינו, מיד תעבור לדף הכניסה שוב, והזדהה עם הסיסמא שבחרת")
            window.open("enter_page.html");
            addMember();
        }
    }
})

const addMember = () => {
    const obj = {
        id: members.length,
        identity: sign_in_id.value,
        name: sign_in_name.value,
        password: sign_in_password.value,
        phone: sign_in_phone.value,
        win: 0,
        lose: 0
    }
    members.push(obj)
    localStorage.setItem("members", JSON.stringify(members))
}

console.log(members)
