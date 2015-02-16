var date = new Date();
var o = {
    ['today_' + date.getTime()]: date.getDay()
}

console.log(o.toString().normalize());