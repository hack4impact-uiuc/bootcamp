const form = document.getElementById("contribute-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get("name");
  alert(name);

  form.reset();
});
