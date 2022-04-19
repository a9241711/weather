function showErrorMessage() {
  const errorDiv = document.querySelector(".card--error");
  const weatherDiv = document.querySelector(".card");
  const closeBtn = document.querySelector(".btn_close");

  errorDiv.style.display = "block";
  weatherDiv.style.display = "none";
  closeBtn.addEventListener("click", function () {
    errorDiv.style.display = "none";
    weatherDiv.style.display = "block";
  });
}
