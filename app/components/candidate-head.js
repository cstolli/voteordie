import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['head-shot'],
  classNameBindings: ['selected'],
  selected: Ember.computed('selectedCandidate', function() {
    return this.get('selectedCandidate') === this.get('candidate').id
  }),
  click() {
    this.set('selectedCandidate', this.get('candidate').id)
  }
})
