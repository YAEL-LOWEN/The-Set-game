
const enter_page_password = document.querySelector("#enter_page_password")
const enter_page_id = document.querySelector("#enter_page_id")
const enter_page_button = document.querySelector(".enter_page_button")
const enter_page_form = document.querySelector(".enter_page_form")
const enter_page_link = document.querySelector("#enter_page_link")
const enter_hide = document.querySelector(".enter_hide")
const main = document.querySelector(".main")
const members = JSON.parse(localStorage.getItem("members")) || []
setTimeout( ()=>{
  enter_hide.style.display = "inline" 
    } , 1500)
enter_page_button.addEventListener("click", (event) => {
    
    const findMember = members.find(member => {
        return (Number(member.password) === Number(enter_page_password.value) && Number(member.identity) === Number(enter_page_id.value))
    })
    {
        if (findMember) {
            localStorage.setItem("currentUser", JSON.stringify(findMember))
            alert("שלום! אנחנו שמחים שאתה שוב איתנו 😍 לחץ ,אישור, כדי לעבור לדף הבית")
            window.open("homepage.html");
        }
        else
            alert("חבל שאינך רשום במערכת... 😢 לחץ ,הרשמה, ונשמח לקבל אותך כאחד מאיתנו")
    }
})
const currentUser = JSON.parse(localStorage.getItem("currentUser"))
if (currentUser) {
    console.log(" שם המשתמש" + currentUser.name);
    console.log(" מספר ניצחונות:" + currentUser.win);
}























