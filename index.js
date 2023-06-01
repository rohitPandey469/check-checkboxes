let lastChecked;
window.onload = function () {
  const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
  );
};

function handleCheck(e) {
  const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
  let inBetween = false;
  if (this.checked && e.shiftKey) {
    console.log("reached");
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        // console.log(checkbox);
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
