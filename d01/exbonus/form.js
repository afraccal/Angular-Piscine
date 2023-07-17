
function checkdigit() {
    let n = document.getElementById("zipcode").value;
    let name = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let i = 0;
    while (i < 5)
    {
        if(n[i] < "0" || n[i]> "9")
        {
            console.log("Ciao");
            alert("Wrong input in zipcode");
            return (0);
        }
        i++;
    }
    let j = 0;
    while (j < name.length)
    {
        if(name[j] >= "0" && name[j] <= "9")
        {
            console.log("Ciao");
            alert("Wrong input in First name");
            return (0);
        }
        j++;
    }
    let z = 0;
    while (z < lastname.length)
    {
        if(lastname[z] >= "0" && lastname[z] <= "9")
        {
            console.log("Ciao");
            alert("Wrong input in Last name");
            return (0);
        }
        z++;
    }
}


setInterval(() => {
    console.log("Ehi");
    checkdigit();
}, 10000);