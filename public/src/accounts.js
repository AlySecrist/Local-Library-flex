'use strict';

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}



function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1);
}



function getTotalNumberOfBorrows(account, books) {
  //It returns a number that represents the number of times the account's ID appears in any book's borrow array.
}



function getBooksPossessedByAccount(account, books, authors) {
  //It returns an array of books and authors that represents all books currently checked out by the given account. Look carefully at the object below, as it's not just the book object; the author object is embedded inside of it.
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
