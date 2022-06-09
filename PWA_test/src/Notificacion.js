const $button = document.getElementById("button");
const $bell = document.getElementById("notification");

$button.addEventListener("click", () => {
  const count = Number($bell.getAttribute("data-count")) || 0;
  $bell.setAttribute("data-count", count + 1);
  $bell.classList.add("show-count");
  $bell.classList.add("notify");
});

$bell.addEventListener("animationend", () => {
  $bell.classList.remove("notify");
});
navigator.serviceWorker.register("sw.js");

function showNotification() {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Café glu glu", {
          body: "Tu mensaje ha sido enviado",
          icon: "img/imagen.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
