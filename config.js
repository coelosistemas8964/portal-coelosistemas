/*
 * EndereÃ§os publicados dos sistemas do Portal COELO.
 * Os sistemas permanecem independentes e sÃ£o abertos em nova aba.
 */
const SYSTEM_URLS = {
  folgas: "https://script.google.com/macros/s/AKfycbxUUyYFJ0k0U9zuAXDRkM-Vx3co40YOt01PzBSw4lJKot_jSq2J4fmGACN2-kl9nEO_Pw/exec",
  sap: "https://script.google.com/macros/s/AKfycbyMYZunuULthMa5Ai_UHScIfC5dlYjoB0nZwmleKAK0eaoLuDcb-goeJtApB_8jzMQK/exec"
};

document.addEventListener("DOMContentLoaded", () => {
  const systems = [
    ["link-folgas", SYSTEM_URLS.folgas],
    ["link-sap", SYSTEM_URLS.sap]
  ];

  systems.forEach(([id, url]) => {
    const link = document.getElementById(id);
    if (link && url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
