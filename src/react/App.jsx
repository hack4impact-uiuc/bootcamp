import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [contributions, setContributions] = useState([]);
  const dialog = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");

    setContributions((contributions) => [...contributions, { name }]);

    form.reset();
    dialog.close();
  };

  return (
    <>
      <button id="contribute-button" onClick={() => dialog.showModal()}>
        + Contribute
      </button>

      <dialog id="contribute-dialog" ref={dialog}>
        <form id="contribute-form" onSubmit={onFormSubmit}>
          <label for="contribute-form-name">Name:</label>
          <input
            id="contribute-form-name"
            placeholder="Yummy food"
            name="name"
          />
          <button>Submit</button>
        </form>
      </dialog>

      <div>
        {contributions.map((contribution) => (
          <div>{contribution.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
