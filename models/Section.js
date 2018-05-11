const ko = require('nekodb');

const Section = ko.Model('Section', {
  section: ko.String,
  details: [ko.models.Detail],
  sections: [ko.models.Section],
  type: ko.String.optional(),
  subClass: ko.Boolean,
});

module.exports = Section;
