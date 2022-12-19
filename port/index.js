if (screen.width < 600) {
  document.getElementById("inht").innerHTML = "B.TECH (CHE)";
  document.getElementById("inhtt").innerHTML = "JNTUH-UCEH";
}
// google sheet start
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyMuvZ37f_QjMKuTPG4lH5Ryu0KsQ6_07zSKgt9C-1ZTlXb1gGNMEU5zpdFITNUkuo/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully !!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
//google sheet end
// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
});
// <!-- tilt js effect ends -->
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Full Stack Development!!!"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->
