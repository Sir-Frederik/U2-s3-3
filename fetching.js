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

      const row = document.querySelector(".row");
      booksObj.forEach((book) => {
        console.log(book.title);
        row.className = "row row-gap-3";
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-3 col-lg-2";

        col.innerHTML = `
            <div class="card  data-bs-theme="dark">
            <img src="${book.img}" class="card-img-top cover-img" alt="book image" />
            <div class="card-body bg-light-subtle">
              <h5 class="card-title text-truncate"> ${book.title}</h5>
              <p class="card-text">${book.price} $</p>
              <a href="#" class="btn bg-primary-subtle btn-sm mb-2">Info </a>
              <a href="#" class="btn  btn-info btn-sm"> Add to Cart </a> 
              </div>
              </div>
        `;
        row.appendChild(col);
      });
    })

    .catch((error) => console.log(error));
};
window.onload = () => {
  fetchBook();
};
