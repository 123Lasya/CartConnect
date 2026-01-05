//Faq Logic
      document.addEventListener("DOMContentLoaded", () => {
        const f_Items = document.querySelectorAll(".f-item");

        f_Items.forEach((item) => {
          const header = item.querySelector(".f-header");

          header.addEventListener("click", () => {
            // closeing all other items
            f_Items.forEach((otherItem) => {
              if (otherItem !== item) {
                otherItem.classList.remove("active");
              }
            });

            // toggle Current item
            item.classList.toggle("active");
          });
        });
      });
// Dynamic year For footer
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
