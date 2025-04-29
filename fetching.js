const fetchBook = () => {
  fetch("https://striveschool-api.herokuapp.com/books", {})
    .then((responseObj) => {
      console.log(responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((booksObj) => {
      console.log(booksObj);
      console.log(booksObj.data);

      const row = document.querySelector(row);
      booksObj.data.forEach((book) => {
        console.log(book.title);
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-3";

        col.innerHTML = `<div class="card" style="width: 18rem">
            <img src="${book.img}" class="card-img-top" alt="book image" />
            <div class="card-body">
              <h5 class="card-title"> ${book.title}</h5>
              <p class="card-text"> Price: ${book.price} $</p>
              <a href="#" class="btn btn-primary">Info </a>
              <a href="#" class="btn btn-primary"> Add to Cart </a>
        `;
      });
    })

    .catch((error) => console.log(error));
};
window.onload = () => {
  fetchBook();
};
