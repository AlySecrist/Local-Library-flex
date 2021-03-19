'use strict';

//It returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//It returns the book object that has the matching ID.
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

/*It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
The first array contains books that have been loaned out, and are not yet returned while the second array contains books that have been returned.*/
function partitionBooksByBorrowedStatus(books) {
  let results = [[], []];

  for(let book in books) {
    if (books[book].borrows[0].returned === false){
      results[0].push(books[book]);
    } else results[1].push(books[book]);
  }
  return results;
}

//It should return an array of all the transactions from the book's borrows key. However, each transaction should include the related account information and the returned key.
function getBorrowersForBook(book, accounts) {
  const results = book.borrows.map((transaction) => {
    const { id, returned } = transaction;
    const { name, picture, age, company, email, registered } = accounts.find((account) => account.id === id);

    return { returned, id, name, picture, age, company, email, registered };
  });

  if (results.length > 10) results.length = 10;
  return results;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
