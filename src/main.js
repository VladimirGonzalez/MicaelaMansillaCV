document.addEventListener('DOMContentLoaded', function () {
  const sections = ['education', 'experience', 'about', 'additional-info'];

  sections.forEach(sectionId => {
    const link = document.querySelector(`[href="#${sectionId}"]`);
    const section = document.getElementById(sectionId);

    link.addEventListener('click', function (event) {
      event.preventDefault();
      hideAllSections();
      section.style.display = 'block';
    });
  });

  function hideAllSections() {
    sections.forEach(sectionId => {
      document.getElementById(sectionId).style.display = 'none';
    });
  }
});
