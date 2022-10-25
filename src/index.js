import React, { useState } from "react";
import ReactDOM from "react-dom";

import BooksPresenter from "../Books/BooksPresenter";

import "./styles.css";

function App() {
  const [vm, copyVmToComponentState] = useState([]);

  React.useEffect(() => {
    async function load() {
      const booksPresenter = new BooksPresenter();
      const generatedVm = await booksPresenter.load();
      copyVmToComponentState(generatedVm);
    }
    load();
  }, []);

  async function addBook() {
    const booksPresenter = new BooksPresenter();
    const addedBookSuccessVm = await booksPresenter.add();

    if (addedBookSuccessVm.added) {
      const generatedVm = await booksPresenter.load();
      copyVmToComponentState(generatedVm);
    }
  }

  React.useEffect(() => {
    addBook();
  }, []);

  return (
    <div>
      {vm.map((book, i) => {
        return <div key={i}>{book.visibleName}</div>;
      })}

      <button onClick={addBook}>add book</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
