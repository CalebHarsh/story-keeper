const db = require('../models');

const ObjectID = require('nekodb').client.ObjectID;

const detailCommands = {
  createNewDetail: (item, value) => db.Detail.create({
    item,
    value,
  }).save(),

  updateDetail: (id, item, value) => db.Detail.findById(id)
    .then((detail) => {
      detail.item = item;
      detail.value = value;
      return detail.save();
    }),

  deleteDetail: () => {

  },
};

module.exports = detailCommands;
