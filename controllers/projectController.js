const db = require('../models');

const ObjectID = require('nekodb').client.ObjectID;

const ProjectCommands = {
  newProject: (id, title) => db.Project.create({
    users: [id],
    title,
    characters: [],
    chapters: [],
    story: [],
    miscellaneous: [],
    status: false,
  }).saveAll(),

  updateProjectName: (id, newTitle) => db.Project.findById(id)
    .then((proj) => {
      proj.title = newTitle;
      return proj.save();
    }),

  addCharacter: (id, charID) => db.Project.findById(id)
    .then((proj) => {
      proj.characters.$addToSet([charID]);
      return proj.save();
    }),

  addChapter: (id, chapID) => db.Project.findById(id)
    .then((proj) => {
      proj.chapters.$addToSet([chapID]);
      return proj.save();
    }),

  addStory: (id, stryID) => db.Project.findById(id)
    .then((proj) => {
      proj.story.$addToSet([stryID]);
      return proj.save();
    }),


  addMisc: (id, miscID) => db.Project.findById(id)
    .then((proj) => {
      proj.miscellaneous.$addToSet([miscID]);
      return proj.save();
    }),

};

module.exports = ProjectCommands;
