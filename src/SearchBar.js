import { useState } from "react";
import "./index.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    if (term.length > 0) {
      event.preventDefault();
      onSubmit(term);
      setTerm("");
    } else {
      event.preventDefault();
    }
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex justify-center box">
        <input
          className="p-3 rounded-xl "
          onChange={handleChange}
          value={term}
          type="text"
          placeholder="enter task"
        ></input>
        <button className=" ml-6 p-3  rounded-xl bg-blue-900 text-white">
          Add
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
