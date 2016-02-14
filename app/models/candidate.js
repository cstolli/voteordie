import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  party: DS.attr('string'),
  bio: DS.attr('string'),
  occupation: DS.attr('string'),
  image: DS.attr('string'),
  droppedOut: DS.attr('boolean')
});
