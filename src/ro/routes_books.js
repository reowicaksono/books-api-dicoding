const {
    addBooksHandler,
    getBooksHandler,
    getBooksByIdHandler,
    editBooksByIdHandler,
    deleteBooksByIdHandler,
  } = require('../handler/handler_books');


const Routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBooksHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getBooksHandler,
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: getBooksByIdHandler,
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: editBooksByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: deleteBooksByIdHandler,
    },
  ];
  

  

module.exports =  {Routes};