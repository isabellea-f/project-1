const timelineTitles = document.querySelectorAll(".title");

timelineTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const details = title.nextElementSibling;
    if (details) {
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    }
  });
});
