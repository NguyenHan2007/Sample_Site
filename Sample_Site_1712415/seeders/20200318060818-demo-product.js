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
      { name: 'Macaron', imagepath: '/img/macaron.jpg',origin:'France',price: '25000', },
      { name: 'Muffin', imagepath: '/img/muffin.jpg',origin:'France',price: '30000', },
      { name: 'Cannoli', imagepath: '/img/cannoli-01.png',origin:'Italy',price: '30000', },
      { name: 'Religieuse', imagepath: '/img/Religieuse-01.jpg',origin:'France',price: '35000', },
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
    return queryInterface.bulkInsert('Products', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
