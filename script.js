correctPasscode = "sıla";
document.addEventListener("DOMContentLoaded", () => {
  const choice = sessionStorage.getItem("choice");

  if (choice === "git") {
    const kalBtn = document.getElementById("kalBtn");
    if (kalBtn) kalBtn.style.display = "none";
    setBackground("bg-leave.jpg");
  } else {
    setBackground("bg-main.jpg");
  }
});

function checkPasscode() {
  const input = document.getElementById("passcode").value;
  if (input === correctPasscode) {
    document.getElementById("login").classList.add("hidden");
    notifyServer("Sıla");

    const choice = sessionStorage.getItem("choice");
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

function stay() {
  if (sessionStorage.getItem("choice") === "git") return;

  sessionStorage.setItem("choice", "kal");
  notifyServer("Kal");
  setBackground("bg-stay.jpg");

  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("stayContent").classList.remove("hidden");
}

function leave() {
  sessionStorage.setItem("choice", "git");
  notifyServer("Git");
  setBackground("bg-leave.jpg");

  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("leaveContent").classList.remove("hidden");

  const kalBtn = document.getElementById("kalBtn");
  if (kalBtn) kalBtn.style.display = "none";
}
