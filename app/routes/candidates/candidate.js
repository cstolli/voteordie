import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    this.controllerFor('candidates').set('selectedCandidate', model.get('id'))
  }
});
