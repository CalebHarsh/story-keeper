const ko = require('nekodb');

const Detail = ko.Model('Detail', {
  item: ko.String,
  value: ko.String,
});

module.exports = Detail;
