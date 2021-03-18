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



//It returns a number that represents the number of times the account's ID appears in any book's borrow array.
function getTotalNumberOfBorrows(account, books) {
  //.reduce() -- (.filter().length?)
  // loop over books
  // loop over books[i].borrows
  // compare account.id to books[i].borrows[j].id
  // if match increment result by 1
  // returns a number
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



//It returns an array of books and authors that represents all books currently checked out by the given account. Look carefully at the object below, as it's not just the book object; the author object is embedded inside of it.
/*
[
  {
    id: "5f447132320b4bc16f950076",
    title: "est voluptate nisi",
    genre: "Classics",
    authorId: 12,
    author: {
      id: 12,
      name: {
        first: "Chrystal",
        last: "Lester",
      },
    },
    borrows: [
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: false,
      },
      ...
    ],
  },
]
*/
function getBooksPossessedByAccount(account, books, authors) {
  /*
  object destructuring to extract keys
  build new object including author object
  return array
  {account} has checked out [{book (author){}}, {book (author){}}]
  */
  let results = [];
  //loop over books
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    //loop over book's borrows
    for (let j = 0; j < book.borrows.length; j++) {
      let transaction = book.borrows[j];
      //compare borrow id to account id and borrow's returned state is false
      if (transaction.id === account.id && transaction.returned === false) {
        for (let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if (book.authorId === author.id) book.author = author;
        }
        results.push(book);
      }
    }
  }
  console.log(results);
  return results;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
