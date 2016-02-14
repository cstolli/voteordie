import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['vote-card'],
  classNameBindings: ['currentVote', 'droppedOut'],
  currentVote: Ember.computed('voter.currentVote', function () {
    return this.get('voter').get('currentVote') === this.get('candidate').get('id')
  }),
  droppedOut: Ember.computed('candidate.droppedOut', function () {
    return this.get('candidate').get('droppedOut'); 
  }),
  didRender() {
    console.log(this.get('voter'))
  },
  actions: {
    voteFor() {
      this.get('voter').set('currentVote', this.get('candidate').get('id'))
      this.get('voter').save();
    }
  }
});
