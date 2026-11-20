/*
 * Endereço publicado do sistema Gestão de Folgas.
 * O SAP permanece sem link até a conclusão do desenvolvimento.
 */
const SYSTEM_URLS = {
  folgas: "https://script.google.com/macros/s/AKfycbxUUyYFJ0k0U9zuAXDRkM-Vx3co40YOt01PzBSw4lJKot_jSq2J4fmGACN2-kl9nEO_Pw/exec",
  sap: ""
};

document.addEventListener("DOMContentLoaded", () => {
  const linkFolgas = document.getElementById("link-folgas");
  if (SYSTEM_URLS.folgas) {
    linkFolgas.href = SYSTEM_URLS.folgas;
    linkFolgas.target = "_blank";
    linkFolgas.rel = "noopener noreferrer";
  }
});
