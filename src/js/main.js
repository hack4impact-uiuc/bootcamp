const dialog = document.getElementById("contribute-dialog");
const contributeButton = document.getElementById("contribute-button");
const form = document.getElementById("contribute-form");
const contributions = document.getElementById("contributions");

contributeButton.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get("name");
  alert(name);

  form.reset();
  dialog.close();
});
