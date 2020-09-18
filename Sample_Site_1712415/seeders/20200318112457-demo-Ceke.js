'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { name: 'Macaron', imagepath: '/img/macaron.jpg',origin:'France',price: '25000', },
      { name: 'Muffin', imagepath: '/img/muffin.jpg',origin:'France',price: '30000', },
      { name: 'Cannoli', imagepath: '/img/cannoli-01.png',origin:'Italy',price: '30000', },
      { name: 'Religieuse', imagepath: '/img/Religieuse-01.jpg',origin:'France',price: '35000', },
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Cakes', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cakes', null, {});
  }
};
