'use strict';

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//It returns the account object that has the matching ID.
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}



//It returns a sorted array of objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1);
}



//It returns the number of times the account's ID appears in any book's borrow array.
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let j = 0; j < book.borrows.length; j++) {
      let transaction = book.borrows[j];
      account.id === transaction.id ? result += 1 : result;
    }
  }
  return result;
}



//It returns an array of books and authors that represents all books currently checked out by the given account, with the author object embedded inside of it.
function getBooksPossessedByAccount(account, books, authors) {
  let results = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let j = 0; j < book.borrows.length; j++) {
      let transaction = book.borrows[j];
      if (transaction.id === account.id && transaction.returned === false) {
        for (let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if (book.authorId === author.id) book.author = author;
        }
        results.push(book);
      }
    }
  }
  return results;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
