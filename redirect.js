const PORTFOLIO_URL = "https://portfolio-01-4zvq.vercel.app/";

(function redirectPortfolio() {
  const mode = document.documentElement.dataset.redirect;

  if (mode === "instant") {
    window.location.replace(PORTFOLIO_URL);
    return;
  }

  const delaySeconds = Number(mode);
  if (Number.isFinite(delaySeconds) && delaySeconds >= 0) {
    window.setTimeout(() => {
      window.location.replace(PORTFOLIO_URL);
    }, delaySeconds * 1000);
  }
})();
