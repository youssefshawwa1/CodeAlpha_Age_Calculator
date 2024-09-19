let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];


const calculateAge =  () =>  {
    let birthDate = new Date(userInput.value);
    let result = document.querySelector("#result");

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();
    
    let userDay, userMonth, userYear;

    userYear = todayYear - birthYear;
    if(todayMonth >= birthMonth){
        userMonth = todayMonth - birthMonth;
    } else {
        userYear--;
        userMonth = 12 + todayMonth - birthMonth;
    }

    if(todayDay >= birthDay) {
        userDay = todayDay - birthDay;
    }
    else {
        userMonth--;
        userDay = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay;
    }
    if(userMonth < 0) {
        userMonth = 11;
        userYear--;
    }
    let theResultText = ``

    if(isNaN(userYear)) {
        theResultText = `Please Make sure to select a valid date!`
    } else {
        theResultText = `You are  <span>${userYear}</span> years, <span>${userMonth}</span> months, and <span>${userDay}</span> days old!
    `;
    }
    result.innerHTML = theResultText;
}
const getDaysInMonth = (year, month) =>{
return new Date(year, month, 0).getDate();
}

let button = document.querySelector("#button");
button.addEventListener("click", () => {
    calculateAge();
})