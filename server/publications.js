import { Meteor } from 'meteor/meteor';
import { Podcasts } from '../collections/podcasts.js';

Meteor.publish('podcasts', function() {
  return Podcasts.find();
});
