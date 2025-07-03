const correctPasscode = "sıla";
notifyServer("Sayfaya girdi.");
//document.addEventListener("DOMContentLoaded", () => {
//  const choice = localStorage.getItem("choice");

/*  if (choice === "git") {
    const kalBtn = document.getElementById("kalBtn");
    if (kalBtn) kalBtn.style.display = "none";
    setBackground("bg-leave.jpg");
  } else {
    setBackground("bg-main.jpg");
  }*/
//});

function setBackground(imageFile) {
  document.body.style.backgroundImage = `url('img/${imageFile}')`;
}

function checkPasscode() {
  const input = document.getElementById("passcode").value;
  if (input === correctPasscode) {
    document.getElementById("login").classList.add("hidden");
    notifyServer("Sıla");

    const choice = localStorage.getItem("choice");
    if (choice === "git") {
      document.getElementById("leaveContent").classList.remove("hidden");
      setBackground("bg-leave.jpg");
    } else {
      document.getElementById("mainContent").classList.remove("hidden");
      setBackground("bg-main.jpg");
    }
  } else {
    document.getElementById("error").innerText = "Şifre yanlış.";
    notifyServer("Şifreyi girmeyi bile beceremedi");
  }
}

function notifyServer(choice) {
  fetch("https://script.google.com/macros/s/AKfycbzIM5RfHQcxkFXREco8G5jp6q4WfRnXsk4p1r8a_GCiOXnPp0vso8qY4IPDjnu9DVTt/exec?choice=" + choice, {
    method: "POST"
  });
}

function stay() {
  //if (localStorage.getItem("choice") === "git") return;

  localStorage.setItem("choice", "kal");
  notifyServer("Kal");
  setBackground("bg-stay.jpg");

  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("stayContent").classList.remove("hidden");
}

function leave() {
  localStorage.setItem("choice", "git");
  notifyServer("Git");
  setBackground("bg-leave.jpg");

  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("leaveContent").classList.remove("hidden");

  const kalBtn = document.getElementById("kalBtn");
  if (kalBtn) kalBtn.style.display = "none";
}
