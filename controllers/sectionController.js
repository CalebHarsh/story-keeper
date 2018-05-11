const db = require('../models');

const ObjectID = require('nekodb').client.ObjectID;

const SectionCommands = {
  createNewSection: (detailsID, info) => db.Section.create({
    section: info.section,
    details: [detailsID],
    sections: [],
    type: info.type,
    subClass: false,
  }).save(),

  addSection: (id, sectionID) => db.Section.findById(id)
    .then((section) => {
      section.sections.$$addToSet(sectionID);
      return section.save();
    }),

  makeSubClass: id => db.Section.findById(id)
    .then((section) => {
      section.subClass = true;
      return section.save();
    }),

  removeSection: (id, sectionID) => db.Section.findById(id)
    .then((section) => {
      section.sections.$$pull(sectionID);
      return section.save();
    }),

};

module.exports = SectionCommands;
