function initEventsListener() {
  document.addEventListener("click", (event) => {
    if (event.target && event.target.dataset.click !== undefined) {
      event.target.classList.add("active");
      setTimeout(() => {
        event.target.classList.remove("active");
      }, 200);
    }
  });

  document.addEventListener("keydown", (event) => {
    const code = event.code;
    const letr = document.querySelector(`#${code}`);
    letr.classList.add("active");
    setTimeout(() => {
      letr.classList.remove("active");
    }, 200);
  });
}
initEventsListener();

export { initEventsListener };
