import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn: function(provider) {
      
      switch (provider) {
        case 'twitter':
          this.get("session").open("firebase", { provider: provider}).then((data) => {
            this.store.find('voter', {orderBy: 'uid', equalTo: data.uid}).then((voters) => {
              if (voters.content.length === 0) {
                let newVoter = this.store.createRecord('voter', {
                  provider: data.provider,
                  uid: data.uid,
                  profile: data.currentUser.cachedUserProfile
                })
                newVoter.save();
              } else {
                this.set('voter', voters.objectAt(0))
              }
            })
          });
          break;
        
        case 'password':
          break;
      }
      
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});
