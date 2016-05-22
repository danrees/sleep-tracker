import { Template } from 'meteor/templating';

import './main.html';
import { SleepEvents} from '../imports/api/sleepEvents.js';

Template.sleepEvents.helpers({
  sleepEvents() {
    return SleepEvents.find({},{sort: {eventTime: -1}});
  },
 
});

Template.eventForm.events({
  'submit .new-event'(event){
    event.preventDefault();
    console.log("Why is this submitting ... ");
    const target = event.target;

    const eventName = target.eventName.value;
    const eventTime = new Date(target.eventTime.value);
    const notes = target.notes.value;
    console.log(eventTime);
    SleepEvents.insert({eventName: eventName, eventTime: eventTime, notes: notes});
    
  }
});
