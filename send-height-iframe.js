function sendHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ frameHeight: height }, '*');
}

// Stuur de hoogte bij laden en bij scherm-resizen
window.addEventListener('load', sendHeight);
window.addEventListener('resize', sendHeight);
