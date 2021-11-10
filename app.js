//selectors
const today = document.getElementById("date");
//get a date

//event handler

//functions
const date = new Date();
//get month=
const month = date.getUTCMonth() + 1;
const day = date.getUTCDate();
const year = date.getUTCFullYear();
today.textContent = day + "/" + month + "/" + year;
