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

  const food = formData.get("food");
  const eventName = formData.get("event");
  const date = formData.get("date");
  const location = formData.get("location");
  const extra = formData.get("extra");

  const newElement = document.createElement("div");
  newElement.appendChild(createElement(food));
  newElement.appendChild(createElement(eventName));
  newElement.appendChild(createElement(date));
  newElement.appendChild(createElement(location));
  newElement.appendChild(createElement(extra));

  contributions.appendChild(newElement);

  form.reset();
  dialog.close();
});

function createElement(text) {
  const element = document.createElement("p");
  element.textContent = text;
  return element;
}
