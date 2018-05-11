const ko = require('nekodb');

const Project = ko.Model('Project', {
  users: [ko.String],
  title: ko.String,
  characters: [ko.models.Section],
  chapters: [ko.models.Section],
  story: [ko.models.Section],
  miscellaneous: [ko.models.Section],
  status: ko.Boolean,
  $$hooks: {
    presave: (project, next) => {
      console.log(project);
      next();
    },
  },
});

module.exports = Project;
