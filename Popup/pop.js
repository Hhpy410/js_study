$(document).ready(function () {
  document.querySelector("#createBtn").addEventListener("click", btnClick);
});

function btnClick() {
  const pop = $(".tc_popup");
  console.log(pop.css("display"));
  if (pop.css("display") == "none") {
    pop.css("display", "initial");
    pop.css("height", $(document).height());
  } else {
    pop.css("display", "none");
  }
}
