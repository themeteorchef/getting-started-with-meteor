import { Meteor } from 'meteor/meteor';
import { Podcasts } from '../collections/podcasts.js';

Meteor.methods({
  'podcasts.add': function (podcast) {
    return Podcasts.insert(podcast);
  },
  'podcasts.update': function (podcast) {
    Podcasts.update(podcast._id, { $set: podcast });
  },
  'podcasts.remove': function (_id) {
    Podcasts.remove(_id);
  },
});
