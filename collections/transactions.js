/*
Transactions
==============
_id
bankId
status_code
userId
message
basketTotal
createdAt
domainId
*/

Transactions = new Mongo.Collection('transactions');

Transactions.helpers({
    bank: function(){
        return PaymentBank.findOne({'_id': this.bankId});
    },
    user: function(){
        return Meteor.users.findOne({'_id': this.userId});
    },
    domain: function(){
        return Domain.findOne({'_id': this.domainId});
    }
});

Transactions.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});