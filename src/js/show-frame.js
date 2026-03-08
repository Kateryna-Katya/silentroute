document.addEventListener("DOMContentLoaded", () => {
  const demoBtn = document.querySelector(".demo-btn");
  const iframeWrapper = document.querySelector(".iframe-wrapper");
  const iframe = document.getElementById("gameIframe");
  const closeBtn = document.getElementById("closeIframeBtn");

  if (!demoBtn || !iframe || !closeBtn || !iframeWrapper) return;

  demoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    iframe.src = demoBtn.dataset.gameUrl;

    iframe.classList.add("active");
    iframeWrapper.classList.add("active");
    closeBtn.classList.add("active");

    demoBtn.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    iframe.src = "";
    iframe.classList.remove("active");
    iframeWrapper.classList.remove("active");
    closeBtn.classList.remove("active");

    demoBtn.style.display = "block";
  });
});