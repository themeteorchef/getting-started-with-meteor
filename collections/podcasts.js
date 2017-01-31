import { Mongo } from 'meteor/mongo';

export const Podcasts = new Mongo.Collection('Podcasts');

if (Meteor.isServer) {
  if (Podcasts.find().count() < 1) {
    [{ title: 'Back to Work', url: 'http://5by5.tv/b2w' },
     { title: 'Rodering on the Line', url: 'http://www.merlinmann.com/roderick' },
     { title: 'Here\'s the Thing', url: 'http://www.wnyc.org/shows/heresthething' },
     { title: 'Evening Dhamma Talks', url: 'http://www.dhammatalks.org/mp3_index.html' }]
    .forEach((podcast) => Podcasts.insert(podcast));
  }
}
