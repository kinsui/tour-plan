function resizeFontsize() {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${width / 750 * 100}px`;
}

resizeFontsize();

window.addEventListener('orientationchange', resizeFontsize);
window.addEventListener('resize', resizeFontsize);
