'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { name: 'Gelato', imagepath: '/img/Gelato.jpg',origin:'Italy',price: '35000', },
      { name: 'Sorbet', imagepath: '/img/Sorbet.jpg',origin:'American',price: '35000', },
      { name: 'Popsicle', imagepath: '/img/popsicle.jpg',origin:'American',price: '20000', },
      { name: 'Popsicleforvalentine', imagepath: '/img/popsicleforvalentine.jpg',origin:'Italy and Spain',price: '25000', },
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Creams', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Creams', null, {});
  }
};
