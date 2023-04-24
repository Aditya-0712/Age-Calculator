var day = document.forms["myform"]["day"];
var month = document.forms["myform"]["month"];
var year = document.forms["myform"]["year"];

var daynull = document.querySelectorAll(".error")[0];
var dayhead = document.querySelectorAll(".head")[0];
var daybox = document.forms["myform"]["day"];
var ansday = document.getElementsByClassName("ans")[2];

var monthnull = document.querySelectorAll(".error")[1];
var monthhead = document.querySelectorAll(".head")[1];
var monthbox = document.forms["myform"]["month"];
var ansmonth = document.getElementsByClassName("ans")[1];

var yearnull = document.querySelectorAll(".error")[2];
var yearhead = document.querySelectorAll(".head")[2];
var yearbox = document.forms["myform"]["year"];
var ansyear = document.getElementsByClassName("ans")[0];

function calc()
{
    var flag1=0 , flag2=0 , flag3=0 ;

    // Validating Day 
    if (day.value == "")
    {
        daynull.innerHTML = "This field is required";
        daynull.style.display = "flex";
        dayhead.style.color = "red";
        daybox.style.borderColor = "red";
    }
    else if (day.value>31 || day.value<1)
    {
        daynull.innerHTML = "Must be a valid day";
        daynull.style.display = "flex";
        dayhead.style.color = "red";
        daybox.style.borderColor = "red";
    }
    else if (day.value>28 && month.value == 2)
    {
        daynull.innerHTML = "Must be a valid day";
        daynull.style.display = "flex";
        dayhead.style.color = "red";
        daybox.style.borderColor = "red";
    }
    else if ((day.value>30 && month.value == 4) || (day.value>30 && month.value == 6) || (day.value>30 && month.value == 9) || (day.value>30 && month.value == 11))
    {
        daynull.innerHTML = "Must be a valid day";
        daynull.style.display = "flex";
        dayhead.style.color = "red";
        daybox.style.borderColor = "red";
    }
    else 
    {
        flag1=1;
        daynull.style.display = "none";
        dayhead.style.color = "#6d6d6d";
        daybox.style.borderColor = "rgba(0, 0, 0, 0.15)";
    }


    // Validating month
    if (month.value == "")
    {
        monthnull.innerHTML = "This field is required";
        monthnull.style.display = "flex";
        monthhead.style.color = "red";
        monthbox.style.borderColor = "red";
    }
    else if (month.value>12 || month.value<1)
    {
        monthnull.innerHTML = "Must be a valid month";
        monthnull.style.display = "flex";
        monthhead.style.color = "red";
        monthbox.style.borderColor = "red";
    }
    else 
    {
        flag2=1;
        monthnull.style.display = "none";
        monthhead.style.color = "#6d6d6d";
        monthbox.style.borderColor = "rgba(0, 0, 0, 0.15)";
    }

    // Validating Year 
    if (year.value == "")
    {
        yearnull.innerHTML = "This field is required";
        yearnull.style.display = "flex";
        yearhead.style.color = "red";
        yearbox.style.borderColor = "red";
    }
    else if (year.value>2023)
    {
        yearnull.innerHTML = "Must be in the past";
        yearnull.style.display = "flex";
        yearhead.style.color = "red";
        yearbox.style.borderColor = "red";
    }
    else if (year.value<1000)
    {
        yearnull.innerHTML = "Must be 4 digits";
        yearnull.style.display = "flex";
        yearhead.style.color = "red";
        yearbox.style.borderColor = "red";
    }
    else
    {
        flag3=1;
        yearnull.style.display = "none";
        yearhead.style.color = "#6d6d6d";
        yearbox.style.borderColor = "rgba(0, 0, 0, 0.15)";
    }

    if (flag1 == 1 && flag2 == 1 && flag3 == 1)
    {
        const date = new Date();
        let tday = date.getDate();
        let tmonth = date.getMonth() + 1;
        let tyear = date.getFullYear();

        var resyear,resmonth,resday;

        if (tmonth<month.value)
        {
            resyear = tyear-year.value-1;
            resmonth = (12-month.value) + tmonth + (resyear*12);
        }
        else 
        {
            resyear = tyear-year.value;
            resmonth = (tmonth-month.value) + (resyear*12);
        }

        resday = resmonth*31;

        ansyear.innerHTML = resyear;
        ansmonth.innerHTML = resmonth;
        ansday.innerHTML = resday;
    }
}