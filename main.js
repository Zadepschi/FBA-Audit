
document.addEventListener("DOMContentLoaded", function () {
  // Создаём кнопку только один раз
  if (document.querySelector(".back-to-top")) {
    return;
  }

  const button = document.createElement("button");

  button.type = "button";
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Вернуться в начало страницы");
  button.setAttribute("title", "Наверх");
  button.innerHTML = "&uarr;";

  document.body.appendChild(button);

  // Показываем кнопку после прокрутки вниз
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      button.classList.add("is-visible");
    } else {
      button.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop, {
    passive: true
  });

  // Возвращаемся в начало страницы
  button.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Проверяем положение страницы при загрузке
  toggleBackToTop();
});
