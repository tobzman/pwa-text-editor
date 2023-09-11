const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;

  butInstall.style.display = "block";
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  const userChoice = await promptEvent.userChoice;

  if (userChoice.outcome === "accepted") {
    console.log("User accepted the PWA installation");
  } else {
    console.log("User declined the PWA installation");
  }

  window.deferredPrompt = null;

  butInstall.style.display = "none";
});

window.addEventListener("appinstalled", (event) => {
  console.log("PWA was installed");
});
