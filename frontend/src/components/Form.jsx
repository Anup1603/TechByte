import { useContext, useRef, useState } from "react";
import TodaysTechContext from "../stores/Todays-TechContext";

function Form() {
  const { categories, addFact, setShowForm } = useContext(TodaysTechContext);

  const [text, setText] = useState("");
  const sourceRef = useRef("");
  const [category, setCategory] = useState("");

  const handlerFormSubmit = (e) => {
    e.preventDefault();

    const source = sourceRef.current.value;
    addFact(text, source, category);

    sourceRef.current.value = "";
    setCategory("");
    setText("");
    setShowForm(false);
  };

  return (
    <>
      <form className="fact-form " id="fact-form" onSubmit={handlerFormSubmit}>
        <input
          type="text"
          placeholder="Share a Tech fact with the World..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>{200 - text.length}</span>
        <input
          type="text"
          placeholder="https://example.com/artical"
          ref={sourceRef}
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Choose Category :</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="btn btn-large">POST</button>
      </form>
    </>
  );
}

export default Form;
