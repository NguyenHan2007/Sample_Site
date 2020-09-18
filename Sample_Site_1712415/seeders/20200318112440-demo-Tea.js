'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { name: 'Espresso coffee', imagepath: '/img/espresso-02.jpg',origin:'Italy and Spain',price: '30000', },
      { name: 'Cappuccino coffee', imagepath: '/img/capucino.jpg',origin:'Italy',price: '35000', },
      { name: 'Latte coffee', imagepath: '/img/latte.jpg',origin:'Italy',price: '35000', },
      { name: 'Trà xanh', imagepath: '/img/TRAXANH.jpg',origin:'China',price: '25000', },
      { name: 'Trà ô long', imagepath: '/img/TRAOLONG.jpg',origin:'China',price: '25000', },
      { name: 'Trà trắng', imagepath: '/img/tratrang.jpg',origin:'China',price: '25000', },
      { name: 'Trà đen', imagepath: '/img/TRADEN.jpg',origin:'China',price: '25000', },
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Teas', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teas', null, {});
  }
};
