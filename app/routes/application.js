// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  fetchUser(data) {
    let uid = this.get('session').get('uid')
    let voters = this.store.find('voter', {orderBy: 'uid', equalTo: uid}).then((voters) => {
      this.set('voter', voters.objectAt(0))
    })
    return voters
  },
  beforeModel: function() {
    return this.get("session").fetch().catch(()=> {
    }).then(this.fetchUser.bind(this))
  },
  model: function() {
    return Ember.RSVP.hash({
      candidates: this.store.find('candidate', {orderBy: 'droppedOut', equalTo: false}),
      voter: this.get('voter'),
      droppedCandidates: this.store.find('candidate', {orderBy: 'droppedOut', equalTo: true})
    })
  },
  voter: undefined,

});
