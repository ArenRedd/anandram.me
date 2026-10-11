// Custom-domain root site: keep the homepage canonical and avoid self-redirect loops.
const PORTFOLIO_URL = "https://anandram.me/";
const HOME_URL = "https://anandram.me/";

function redirectToPortfolio() {
  // Intentionally disabled to prevent redirect loops on the custom domain itself.
  window.location.replace(HOME_URL);
}

// This file is kept for compatibility, but the site intentionally does not auto-redirect
// the root page to itself or to an unverified destination.
(function () {
  if (window.location.hostname === "anandram.me" && window.location.pathname === "/") {
    return;
  }
})();
