/*
Subscribers
==============
_id
userId
domainId
createdAt
*/

Subscribers = new Mongo.Collection('subscribers');

Subscribers.helpers({
    user: function(){
        return Meteor.users.findOne({'_id': this.userId});
    },
    domain: function(){
        return Domain.findOne({'_id': this.domainId});
    }
});

Subscribers.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});