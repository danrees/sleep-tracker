import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';
import { SleepEvents} from '../imports/api/sleepEvents.js';

Template.quickForm.events({
  'click .quickEvent'(event,template){
    const eventType = event.target.value; 
    const eventTime = new Date();
    const notesField = template.find('#quickEventNotes');
    const notes = notesField.value;
    Meteor.call('sleepEvents.insert', eventType, eventTime, notes);
    //SleepEvents.insert({"eventName": eventType.toLowerCase(), "eventTime": eventTime, "notes": notes});
    notesField.value = ""; 
  },
});
Template.sleepEvents.helpers({
  sleepEvents() {
    return SleepEvents.find({},{sort: {eventTime: -1}});
  },
});
Template.sleepEvents.events({
  'click .del-event'(){
    console.log("Why won't you delete?");
    //SleepEvents.remove(this._id);
    Meteor.call('sleepEvents.remove',this._id);
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
    
  },
});
