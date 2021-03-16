'use strict';

const { partitionBooksByBorrowedStatus } = require('./books');



/***************helpers***************/




// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//It returns a number that represents the number of book objects inside of the array.
function getTotalBooksCount(books) {
  return books.length;
}



//It returns a number that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts) {
  return accounts.length;
}



//It returns a number that represents the number of books that are currently checked out of the library. This number can be found by looking at the first transaction in the borrows key of each book. If the transaction says the book has not been returned (i.e. returned: false), the book has been borrowed.
function getBooksBorrowedCount(books) {
  //function already built in books.js to do most of this work, use as helper.
  console.log(partitionBooksByBorrowedStatus(books)[0].length);
  return partitionBooksByBorrowedStatus(books)[0].length;
}



//It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
//return array
//length <= 5
//loop over {} in books
//count for each genre...object? {genre: count}
//.sort(most common to least common)
}



//It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
function getMostPopularBooks(books) {
//return array
//length <= 5
//book[i].borrows.length
}



/*.
It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

The name key which represents the first and last name of the author.
The count key which represents the number of times the author's books have been borrowed.
If more than five authors are present, only the top five should be returned.
*/

function getMostPopularAuthors(books, authors) {
  /*
  returns array length <= 5 
  */
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
