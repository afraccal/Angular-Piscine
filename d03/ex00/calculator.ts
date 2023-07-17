function calculate() {
    let fnuminput = document.getElementById("firstnum") as HTMLInputElement;
    let snuminput = document.getElementById("secondnum") as HTMLInputElement;
    let signselect = document.getElementById("operator") as HTMLSelectElement;
    let result = document.querySelector(".res") as HTMLHeadingElement;

    let fnum = Number(fnuminput.value);
    let snum = Number(snuminput.value);
    let sign = signselect.value;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
     // console.log(getRandomInt(120));
    
    if (fnuminput.value.length == 0)
    {
        fnum = getRandomInt(120);
        console.log(fnum);
    }
    if (snuminput.value.length == 0)
    {
        snum = getRandomInt(120);
        console.log(snum);
    }
    if (fnum < 0 || snum < 0)
    {
        alert ("Insert number >= 0");
    }
    if (sign == "add")
    {
        result.innerHTML = String(fnum + snum);
        console.log(result.innerHTML);
    }
    if (sign == "sot")
    {
        result.innerHTML = String(fnum - snum);
        console.log(result.innerHTML);
    }
    if (sign == "mol")
    {
        result.innerHTML = String(fnum * snum);
        console.log(result.innerHTML);
    }
    if (sign == "div")
    {
        if (snum == 0)
        {
            alert ("Through infinity and beyondddd");
        }
        result.innerHTML = String(fnum / snum);
        console.log(result.innerHTML);
    }

}

setInterval(() => {
    alert ("Please, use me...");
}, 30000);