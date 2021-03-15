'use strict';

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//It returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}



//It returns the book object that has the matching ID.
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}



//It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

//The first array contains books that have been loaned out, and are not yet returned while the second array contains books that have been returned. You can check for the return status by looking at the first transaction in the borrows array.
function partitionBooksByBorrowedStatus(books) {
  let results = [[], []];

  for(let book in books) {
    if (books[book].borrows.some((borrow) => borrow.returned === false)){
      results[0].push(books[book]);
    } else results[1].push(books[book]);
  }
  return results;
}



//It should return an array of all the transactions from the book's borrows key. However, each transaction should include the related account information and the returned key.
function getBorrowersForBook(book, accounts) {
/**
 1 book
 list of accounts
 map through book's borrow key
 limit 10
 */
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
