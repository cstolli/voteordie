import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['login-form'],
  email: '',
  password: '',
  actions: {
    signIn(provider) {
      this.sendAction('signIn', provider, this.get('email'), this.get('password'));
    },
    inputPassword(event) {
      this.set('password', event.target.val())
    },
    inputEmail(event) {
      this.set('email', event.target.val())
    }
  }
});
