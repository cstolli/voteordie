import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('candidates', function() {
    this.route('candidate', {path: '/candidate/:candidate_id'});  
  });
  this.route('voters');
  this.route('issues');
  this.route('about');
  this.route('admin', function() {
    this.route('candidates');
    this.route('candidate', {path: '/candidate/:candidate_id'})
    this.route('page', {path: '/page/:page_id'});  
  });
});

export default Router;
