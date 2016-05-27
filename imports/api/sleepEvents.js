import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const SleepEvents = new Mongo.Collection('sleepEvent');

Meteor.methods({
  'sleepEvents.insert'(eventType,eventTime,notes){
    SleepEvents.insert({"eventName": eventType.toLowerCase(), "eventTime": eventTime, "notes": notes});
  },
  'sleepEvents.remove'(sleepEventId){
    SleepEvents.remove(sleepEventId);
  }
});
