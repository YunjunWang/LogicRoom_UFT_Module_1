import bookRepository from "../Books/BooksRepository";

export default class BooksPresenter {
  load = async () => {
    const booksPm = await bookRepository.getBooks();

    const booksVm = booksPm.map((bookPm) => {
      return {
        visibleName: bookPm.name
      };
    });

    return booksVm;
  };

  add = async () => {
    const addedBookPm = await bookRepository.addBook();

    const addedBookVm = { added: addedBookPm.added };

    return addedBookVm;
  };
}
