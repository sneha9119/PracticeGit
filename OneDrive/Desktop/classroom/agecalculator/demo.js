function fun(){

    let date_id=new Date(document.getElementById("d").value);
    let year=document.getElementById("year");
    let month=document.getElementById("month");
    let day=document.getElementById("day");
    // month.innerText="hlo";
    // day.innerText="hlo"
    let cur_date = new Date();
let cur_year = cur_date.getFullYear();
let cur_month = cur_date.getMonth() + 1;
let cur_day = cur_date.getDate();
let g_year = date_id.getFullYear();
let g_month = date_id.getMonth() + 1;
let g_day = date_id.getDate();
let age_year=0;
let age_month=0;
let age_day=0;
if(cur_day>=g_day)
    age_day+=cur_day-g_day;
else
{
    age_month--;
    age_day+=30+cur_day-g_day;
}
if(cur_month+age_month>=g_month)
    age_month+=cur_month-g_month;
else{
    age_year--;
    age_month+=cur_month+12-g_month;
}
age_year+=cur_year-g_year;
year.innerText=age_year;
month.innerText=age_month;
day.innerText=age_day;
}
