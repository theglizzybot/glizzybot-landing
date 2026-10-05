(function () {
  const config = window.GLIZZY_CONFIG || {};
  document.querySelectorAll("[data-invite-link]").forEach((link) => {
    if (config.inviteUrl) link.href = config.inviteUrl;
  });
  document.querySelectorAll("[data-support-link]").forEach((link) => {
    if (config.supportUrl) link.href = config.supportUrl;
  });
  document.querySelectorAll("[data-ryze-link]").forEach((link) => {
    if (config.ryzeUrl) link.href = config.ryzeUrl;
  });
})();
