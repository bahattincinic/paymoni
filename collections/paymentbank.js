/*
PaymentBank
===========
_id
domainId
name
createdAt
*/

PaymentBank = new Mongo.Collection('paymentbank');

PaymentBank.helpers({
    user: function(){
        return Meteor.users.findOne({'_id': this.userId});
    },
    domain: function(){
        return Domain.findOne({'_id': this.domainId});
    }
});

PaymentBank.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});