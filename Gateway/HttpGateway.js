export default class HttpGateway {
  get = async (path) => {
    const response = await fetch(path);

    const dto = response.json();

    return dto;
  };

  add = async (path, book) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    };
    const response = await fetch(path, requestOptions);
    const dto = response.json();
    return dto;
  };
}
