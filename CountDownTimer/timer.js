const countDownTimer = function (cls, date) {
  var _vDate = new Date(date); // 전달 받은 일자
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;
  function showRemaining() {
    var now = new Date();
    var distDt = _vDate - now;
    if (distDt < 0) {
      clearInterval(timer);
      $(cls).children("span").text("THE END");
      return;
    }
    var days = Math.floor(distDt / _day);
    var hours = Math.floor((distDt % _day) / _hour);
    var minutes = Math.floor((distDt % _hour) / _minute);
    var seconds = Math.floor((distDt % _minute) / _second);
    //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";
    // document.getElementById(id).textContent = days + "일 ";
    const timeStr = hours + "시간 " + minutes + "분 " + seconds + "초";
    $(cls).children("span").text(timeStr);
    //   document.getElementById(id).textContent = hours + "시간 ";
    //   document.getElementById(id).textContent += minutes + "분 ";
    //   document.getElementById(id).textContent += seconds + "초";
  }
  timer = setInterval(showRemaining, 1000);
};
function setTimer(beg, cls) {
  let year = beg.slice(0, 4);
  let mon = beg.slice(4, 6);
  let day = beg.slice(6, 8);
  let hh = beg.slice(8, 10);
  let mm = beg.slice(10, 12);
  let ss = beg.slice(12, 14);

  //   let year = beg.substring(0, 4);
  //   let mon = beg.substring(4, 6);
  //   let day = beg.substring(6, 8);
  //   let hh = beg.substring(8, 10);
  //   let mm = beg.substring(10, 12);
  //   let ss = beg.substring(12, 14);

  let newdd = new Date();

  newdd.setFullYear(year);
  newdd.setMonth(mon - 1);
  newdd.setDate(day);
  newdd.setHours(hh);
  newdd.setMinutes(mm);
  newdd.setSeconds(ss);

  countDownTimer(cls, newdd);
}
