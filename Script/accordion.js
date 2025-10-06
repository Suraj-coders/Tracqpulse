function toggleAccordion(index) {
    const items = document.querySelectorAll(".content");
    const icons = document.querySelectorAll(".icon");

    items.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("hidden");
        icons[i].textContent = item.classList.contains("hidden") ? "+" : "−";
      } else {
        item.classList.add("hidden");
        icons[i].textContent = "+";
      }
    });
  }