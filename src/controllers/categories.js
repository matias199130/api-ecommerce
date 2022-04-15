// const { default: axios } = require('axios');
// const express = require('express');
// const { Op } = require('sequelize');
// const router = express();
// const { models?? } = require('../db');

categorias = [
	{ id: 1, name: 'teclado' },
	{ id: 2, name: 'gabinete' },
	{ id: 3, name: 'mouse' },
	{ id: 4, name: 'monitor' }
];
async function getCategories(req, res) {
	// console.log('Prueba');
	res.send(categorias);
}

module.exports = { getCategories };



