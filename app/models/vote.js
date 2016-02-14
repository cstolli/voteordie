import DS from 'ember-data';

export default DS.Model.extend({
  candidate: DS.attr('string'),
  voter: DS.attr('string'),
  commitment: DS.attr('number')
});
