import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  provider: DS.attr('string'),
  profile: DS.attr(),
  currentVote: DS.attr('string')
});
