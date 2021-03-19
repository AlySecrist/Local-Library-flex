'use strict';

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//It returns the number of book objects inside of the array.
function getTotalBooksCount(books) {
  return books.length;
}



//It returns the number of account objects inside of the array.
function getTotalAccountsCount(accounts) {
  return accounts.length;
}



//It returns the number of books that are currently checked out of the library.
function getBooksBorrowedCount(books) {
  //use filter()
  let result = 0;
  for (let i = 0; i < books.length; i++) {
    let returned = books[i].borrows[0].returned;
    if (returned === false) result = result + 1;
  }
  return result;
}



//It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
  const results = [];
  const genres = [];

  for (let i = 0; i < books.length; i++) {
    let genre = books[i].genre;
    if (!genres.includes(genre)) genres.push(genre);
  }

  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i];
    let total = 0;
    for (let j = 0; j < books.length; j ++) {
      let book = books[j];
      if (book.genre === genre) total ++;
    }
    results.push({name: genre, count: total});
  }
    
  results.sort((genreA, genreB) => genreA.count < genreB.count ? +1 : -1);
  if (results.length > 5) results.length = 5;

  return results;
}



//It returns an array containing five objects or fewer that represents the most popular books in the library.
function getMostPopularBooks(books) {
  const results = [];
  for (let i = 0; i < books.length; i++) {
    let title = books[i].title;
    let borrows = books[i].borrows.length;
    results.push({name: title, count: borrows});
  }
  results.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);

  if (results.length > 5) results.length = 5;

  return results;
}



/*.
It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most.

Each object in the returned array has two keys:

The name key which represents the first and last name of the author.
The count key which represents the number of times the author's books have been borrowed.
If more than five authors are present, only the top five should be returned.
*/

function getMostPopularAuthors(books, authors) {
  const results = [];

  for (let i = 0; i < authors.length; i++) {
    const authBooks = [];
    let author = authors[i];
    for (let j = 0; j < books.length; j++) {
      let bookAuth = books[j].authorId;
      let book = books[j];
      if (author.id === bookAuth) authBooks.push(book);  
    }
    let accumulator = 0;
    let borrowTotal = authBooks.reduce((acc, book) => acc += book.borrows.length, accumulator);
    results.push({name: `${author.name.first} ${author.name.last}`, count: borrowTotal});
  }

  results.sort((authA, authB) => authA.count < authB.count ? 1 : -1);

  if (results.length > 5) results.length = 5;

  return results;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
