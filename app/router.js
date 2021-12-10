import EmberRouter from '@ember/routing/router';
import config from 'swiftarr-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('announcements');
  this.route('fez');
  this.route('boardgames');
  this.route('karaoke');
  this.route('reports');
  this.route('moderator', function () {
    this.route('log');
  });
  this.route('admin');
  this.route('logout');
  this.route('login');
  this.route('tweets');
  this.route('forums');
  this.route('seamail');
  this.route('events');
});
