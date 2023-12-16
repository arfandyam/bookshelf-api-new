const {
  addBookHandler,
  getBooksHandler,
  getBookDetailByIdHandler,
  putBookByIdHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: putBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
