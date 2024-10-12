"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Ben Xe Mien Tay",
          address: "395 An Duong Vuong",
          province: "Ho Chi Minh",
          createdAt: "2024-03-26 07:06:14",
          updatedAt: "2024-03-26 07:06:14",
        },
        {
          name: "Ben Xe Mien Tay 2",
          address: "395 An Duong Vuong",
          province: "Ho Chi Minh",
          createdAt: "2024-03-26 07:06:14",
          updatedAt: "2024-03-26 07:06:14",
        },
        {
          name: "Ben Xe Mien Tay 3",
          address: "395 An Duong Vuong",
          province: "Ho Chi Minh",
          createdAt: "2024-03-26 07:06:14",
          updatedAt: "2024-03-26 07:06:14",
        },
        {
          name: "Ben Xe Mien Tay 4",
          address: "395 An Duong Vuong",
          province: "Ho Chi Minh",
          createdAt: "2024-03-26 07:06:14",
          updatedAt: "2024-03-26 07:06:14",
        },
        {
          name: "Ben Xe Mien Tay 5",
          address: "395 An Duong Vuong",
          province: "Ho Chi Minh",
          createdAt: "2024-03-26 07:06:14",
          updatedAt: "2024-03-26 07:06:14",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("stations", null, {});
  },
};
