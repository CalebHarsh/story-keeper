const ko = require('nekodb');

ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URI || 'mongodb://localhost/story-keeper',
});

const Project = require('./Project.js');
const Section = require('./Section.js');

const db = {
  Project,
  Section,
};

module.exports = db;
