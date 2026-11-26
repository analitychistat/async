(function () {
    "use strict";

    const SHOPEE_URL = "https://s.shopee.co.id/8fUD4lX6qM";
    const STORAGE_KEY = "shopee_redirect_timestamp";
    const INTERVAL = 24 * 60 * 60 * 1000;

    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
        navigator.userAgent
    );

    if (!isMobile) return;

    const lastRedirect = Number(localStorage.getItem(STORAGE_KEY)) || 0;

    if (Date.now() - lastRedirect < INTERVAL) return;

    let hasTriggered = false;

    document.addEventListener("click", function () {
        if (hasTriggered) return;

        hasTriggered = true;

        localStorage.setItem(STORAGE_KEY, Date.now().toString());

        window.open(SHOPEE_URL, "_blank", "noopener,noreferrer");
    }, true);
})();
