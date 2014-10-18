Meteor.publish('domain', function(userId) {
    return Domain.find({'userId': userId});
});

Meteor.publish('paymentbank', function(userId) {
    return PaymentBank.find({'userId': userId});
});

Meteor.publish('subscribers', function(userId) {
    var domains = Domain.find({'userId': userId}).fetch();
    var domain_ids = _.pluck(domains, '_id');
    return Subscribers.find({'domainId': {$in: domain_ids}});
});

Meteor.publish('transactions', function(userId) {
    return Transactions.find({'userId': userId});
});