function calculate() {
    let fnum = Number(document.getElementById("firstnum").value);
    let snum = Number(document.getElementById("secondnum").value);
    let sign = document.getElementById("operator").value;
    let result = document.querySelector(".res");

    if (fnum < 0 || snum < 0)
    {
        alert ("Insert number >= 0 because yes");
    }
    if (sign == "add")
    {
        result.innerHTML = fnum + snum;
        console.log(result.innerHTML);
    }

    if (sign == "sot")
    {
        result.innerHTML = fnum - snum;
        console.log(result.innerHTML);
    }
    if (sign == "mol")
    {
        result.innerHTML = fnum * snum;
        console.log(result.innerHTML);
    }
    if (sign == "div")
    {
        if (snum == "0")
        {
            alert("Through infinity and beyondddd");
        }
        result.innerHTML = fnum / snum;
        console.log(result.innerHTML);
    }
    return (result.innerHTML);
}

setInterval(() => {
    alert ("Please, use me...");
}, 30000);