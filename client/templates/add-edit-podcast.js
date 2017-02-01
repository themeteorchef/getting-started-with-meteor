import { Template } from 'meteor/templating';
import { Podcasts } from '../../collections/podcasts.js';
import './add-edit-podcast.html';

Template.addEditPodcast.helpers({
  editing() {
    return Podcasts.findOne(Template.instance().data._id);
  },
  submitButtonLabel() {
    return Template.instance().data._id ? 'Update Podcast' : 'Add Podcast';
  },
});

Template.addEditPodcast.events({
  'submit form': function(event, template) {
    event.preventDefault();

    const podcastId = template.data._id;
    const method = podcastId ? 'podcasts.update' : 'podcasts.add';
    const podcast = {
      title: template.find('[name="title"]').value,
      url: template.find('[name="url"]').value,
    };

    if (podcastId) podcast._id = podcastId;

    Meteor.call(method, podcast, (error) => {
      if (error) {
        alert(error.reason);
      } else {
        template.data.editing.set(null);
        event.target.reset();
      }
    });
  }
});
