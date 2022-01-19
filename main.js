$(document).ready(function () {
  const textList = [
    "엔터",
    "스포츠",
    "자동차",
    "웹툰",
    "경제M",
    "MY구독",
    "레시피",
    "게임",
    "과학",
    "리빙",
    "건강",
    "책방",
    "부모",
    "패션",
    "뷰티",
    "함께N",
    "세계",
    "중국",
  ];
  const color = [
    "#e65da0",
    "#0147b5",
    "#4a94e1",
    "#66c971",
    "#35ae5e",
    "#5290ff",
    "#ebaa00",
    "#5bb8e1",
    "#8449ca",
    "#c08d31",
  ];

  const fontColor = "rgb(32, 32, 32)";
  const whiteColor = "white";

  let cont2 = document.querySelector(".slide");
  let ulN = document.createElement("ul");
  for (let index = 0; index < textList.length; index++) {
    let liN = document.createElement("li");
    liN.innerHTML = textList[index];
    ulN.append(liN);
  }

  cont2.prepend(ulN);
  $("div.slide").children("ul").addClass("menu");
  $(".menu").css("width", "1800px");
  $(".item_news").css("width", "800px");

  const len = Math.floor(Math.random() * color.length);
  const len2 = Math.floor(Math.random() * 8);
  $(".menu").children("li")[len2].style.color = whiteColor;
  $(".menu").children("li")[len2].style.backgroundColor = color[len];
  $(".item_news").text($(".menu").children("li")[len2].innerHTML);
  $(".slide").css("height", $(".menu").css("height"));
  setBtns(len2, "c");

  const list = document.querySelector(".menu").children;
  const cont = document.querySelectorAll(".item_news");
  for (let index = 0; index < list.length; index++) {
    const li = list[index];
    li.addEventListener("mouseover", liMouseover);
    li.addEventListener("mouseout", liMouseout);
    li.addEventListener("click", liClick);
  }

  function liMouseover() {
    if (this.style.color == whiteColor) {
      return false;
    }
    const len = Math.floor(Math.random() * color.length);
    this.style.color = color[len];
  }

  function liMouseout() {
    if (this.style.color == whiteColor) {
      return false;
    }
    this.style.color = fontColor;
  }

  function liClick() {
    for (let index = 0; index < list.length; index++) {
      const li = list[index];
      if (this.style.color == whiteColor) {
        return false;
      }
      li.style.color = fontColor;
      li.style.backgroundColor = whiteColor;
    }
    if (this.style.color == whiteColor) {
      return false;
    }
    const len = Math.floor(Math.random() * color.length);
    this.style.backgroundColor = color[len];
    this.style.color = whiteColor;
    $(".item_news").text(this.innerHTML);
    setBtns(getOnIndex());
  }

  let lis = document.querySelectorAll(".menu li");

  function getOnIndex() {
    for (let index = 0; index < lis.length; index++) {
      if (lis[index].style.color == whiteColor) {
        return index;
      }
    }
  }

  function setOnStyleNext(i) {
    for (let index = 0; index < lis.length; index++) {
      const li = list[index];
      li.style.color = fontColor;
      li.style.backgroundColor = whiteColor;
    }

    i = i + 1;
    const len = Math.floor(Math.random() * color.length);
    lis[i].style.backgroundColor = color[len];
    lis[i].style.color = whiteColor;
    $(".item_news").text(lis[i].innerHTML);
    setBtns(i);
  }

  function setOnStylePrev(i) {
    for (let index = 0; index < lis.length; index++) {
      const li = list[index];
      li.style.color = fontColor;
      li.style.backgroundColor = whiteColor;
    }

    i = i - 1;
    if (i <= 0) {
      i = 0;
    }
    const len = Math.floor(Math.random() * color.length);
    lis[i].style.backgroundColor = color[len];
    lis[i].style.color = whiteColor;
    $(".item_news").text(lis[i].innerHTML);
    setBtns(i);
  }

  $("#prev").click(function () {
    let onIndex = getOnIndex();
    const p = (onIndex + 1) % 8;
    debugger;
    if (p == 1) {
      const wid = `${parseInt((onIndex + 1) / 8 - 1) * -800}px`;
      $(".menu").animate({ left: wid });
    }
    setOnStylePrev(onIndex);
    setBtns(onIndex - 1);
  });
  $("#next").click(function () {
    let onIndex = getOnIndex();
    const p = (onIndex + 1) % 8;
    if (p == 0) {
      const wid = ((onIndex + 1) / 8) * -800 + "px";
      $(".menu").animate({ left: wid });
    }
    setOnStyleNext(onIndex);
    setBtns(onIndex + 1);
  });

  function setBtns(i) {
    if (i == 0) {
      $("#prev").css("display", "none");
    } else {
      $("#prev").css("display", "initial");
      if (i == 17) {
        $("#next").css("display", "none");
      } else {
        $("#next").css("display", "initial");
      }
    }
  }

  let d = new Date();
  console.log(d.getFullYear(),d.getMonth() + 1,d.getDate());

  // function setCountDown(tar){

  // }


});
