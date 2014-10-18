/**
Domain
===================
_id
userId (author)
name (Doamain Name)
secretKey (api key)
createdAt
*/

Domain = new Mongo.Collection('domain');

Domain.helpers({
    user: function(){
        return Meteor.users.findOne({'_id': this.userId});
    },
    subscribers: function(){
        return Subscribers.find({'domainId': thid._id}).fetch();
    },
    banks: function(){
        return PaymentBank.find({'domainId': this._id}).fetch();
    },
    transactions: function(){
        return Transaction.find({'domainId': this._id}).fetch();
    }
});

Domain.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});