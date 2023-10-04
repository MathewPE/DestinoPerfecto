document.addEventListener("DOMContentLoaded", function () {
  const paths = document.querySelectorAll("path");

  paths.forEach((path) => {
    path.addEventListener("mouseenter", function () {
      const tooltipText = this.getAttribute("data-tooltip");
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");

      // Crear un elemento de párrafo dentro del tooltip
      const paragraph = document.createElement("p");
      paragraph.textContent = tooltipText;
      tooltip.appendChild(paragraph);

      // Crear un enlace dentro del tooltip
      const link = document.createElement("a");
      link.textContent = "Más información (click)";

      link.href = "#"; // Agrega el enlace deseado
      tooltip.appendChild(link);

      document.body.appendChild(tooltip);

      // Posiciona el tooltip cerca del path
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + "px";
      tooltip.style.top = rect.bottom + "px";

      // Agrega la clase 'active' para mostrar el tooltip
      tooltip.classList.add("active");

      // Maneja el evento al salir del path
      this.addEventListener("mouseleave", function () {
        tooltip.remove();
      });
    });
  });
});
