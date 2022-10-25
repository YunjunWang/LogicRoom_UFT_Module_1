import httpGateway from "../Gateway/HttpGateway";

class BooksRepository {
  constructor() {
    this.httpGateway = new httpGateway();
  }
  getBooks = async () => {
    const booksDto = await this.httpGateway.get(
      "https://api.logicroom.co/api/yunjun.wangirl@gmail.com/books"
    );

    const booksPm = booksDto.result.map((bookDto) => {
      return {
        name: bookDto.name
      };
    });
    return booksPm;
  };

  addBook = async () => {
    const addedBookDto = await this.httpGateway.add(
      "https://api.logicroom.co/api/yunjun.wangirl@gmail.com/books",
      {
        name: "test book",
        author: "tester"
      }
    );

    const addedBookPm = { added: addedBookDto.success };

    return addedBookPm;
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
