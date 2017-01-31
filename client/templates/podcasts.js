import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Podcasts } from '../../collections/podcasts.js';
import './podcasts.html';

Template.podcasts.onCreated(() => {
  const template = Template.instance();
  template.subscribe('podcasts');
  template.editing = new ReactiveVar(null);
});

Template.podcasts.helpers({
  podcasts() {
    return Podcasts.find();
  },
  editing() {
    const editing = Template.instance().editing;
    return { _id: editing.get(), editing };
  },
});

Template.podcasts.events({
  'click .edit': function (event, template) {
    template.editing.set(this._id);
  },
  'click .remove': function (event, template) {
    if (confirm('Are you sure? This is permanent!')) {
      Meteor.call('podcasts.remove', this._id, (error) => {
        if (error) {
          alert(error.reason);
        } else {
          template.editing.set(null);
        }
      });
    }
  }
});
