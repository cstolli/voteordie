import Ember from 'ember';

export default Ember.Controller.extend({
  isAdmin: Ember.computed('session.currentUser', function() {
    return this.get('session') 
            && this.get('session').get('currentUser')
            && this.get('session').get('currentUser').username === 'cstolli'
  })
});
