// Variable to store the ID of the last highlighted section
let lastHighlightedSection = "";

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section a");
  const menuLinks = document.querySelectorAll("aside nav li a");

  let closestSection = null;
  let closestDistance = Infinity;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const distance = Math.abs(sectionTop - window.innerHeight / 2);

    // Update closest section if this one is nearer to the center of the viewport
    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section.getAttribute("id");
    }
  });

  // Only update the highlight if the closest section has changed
  if (closestSection && closestSection !== lastHighlightedSection) {
    // Update the last highlighted section
    lastHighlightedSection = closestSection;

    // Highlight only the link that matches the closest section
    menuLinks.forEach(link => {
      const li = link.parentElement;
      li.classList.remove("highlight");

      if (link.getAttribute("href") === `#${closestSection}`) {
        li.classList.add("highlight");
      }
    });
  }
});