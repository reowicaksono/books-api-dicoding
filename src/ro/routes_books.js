const {BOOKENDPOINT} = require('../utils/app_const');

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
      path: BOOKENDPOINT,
      handler: addBooksHandler,
    },
    {
      method: 'GET',
      path: BOOKENDPOINT,
      handler: getBooksHandler,
    },
    {
      method: 'GET',
      path:  BOOKENDPOINT+'/{bookId}',
      handler: getBooksByIdHandler,
    },
    {
      method: 'PUT',
      path: BOOKENDPOINT+'/{bookId}',
      handler: editBooksByIdHandler,
    },
    {
      method: 'DELETE',
      path: BOOKENDPOINT+ '/{bookId}',
      handler: deleteBooksByIdHandler,
    },
  ];
  

  

module.exports =  {Routes};