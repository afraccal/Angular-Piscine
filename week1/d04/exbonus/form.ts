function check_email(){
    let lettera = document.querySelector("#email") as HTMLInputElement;
    if (!lettera.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        alert("Email not valid");
    }
    else
    {
        alert("!!Valid!!")
    }
    check_lenght(lettera.value);
}

function check_number(){
    let lettera = document.querySelector("#phone") as HTMLInputElement;
    if (!lettera.value.match(/^\d+$/))
    {
        alert("Phone number not valid");
    }
    else
    {
        alert("!!Valid!!")
    }
    check_lenght(lettera.value);
}

function pass_lettre(str)
{
    let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    let capital = /[QWERTYUIOPASDFGHJKLZXCVBNM]/;
    let number = /[1234567890]/
    if (!specialChars.test(str) || !capital.test(str) || !number.test(str))
       return (false);
    return (true);
}

function check_password(){
    let lettera = document.querySelector("#password") as HTMLInputElement;
    if (!pass_lettre(lettera.value))
    {
        alert("password not valid");
    }
    else
    {
        alert("!!Valid!!")
    }
    check_lenght(lettera.value);
}

function Date_valid(date) {
    // Matching the date through regular expression      
        let operator = date.split('/');

        // Extract the string into month, date and year      
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let year = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let day = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                return false;
            }
            else
                if ((leapYear == true) && (day > 29)) {
                    return false;
                }
        }
    return true;
}

function check_date(){
    let lettera = document.querySelector("#date") as HTMLInputElement;
    if(Date_valid(lettera.value))
    {
        alert("Date not valid")
    }
    else
    {
        alert("!!Valid!!")
    }
    check_lenght(lettera.value);

}

function check_ip(){
    let ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let lettera = document.querySelector("#address_ip") as HTMLInputElement;
    if (!ip.test(lettera.value))
    {
        alert("Ip not valid");
    }
    else
    {
        alert("!!Valid!!")
    }
    check_lenght(lettera.value);

}

function check_lenght(str){

    let i = 0;
    while (i < str.length)
    {
        i++;
    }
    console.log("the lenght is " + i);
}

function submission()
{
    alert("Only a place holder button, check console");
}