Meteor.publish('domain', function() {
    var subscribe_domains = _.pluck(Subscribers.find({'userId': this.userId}).fetch() , 'domainId');
    var user_domains = _.pluck(Domain.find({'userId': this.userId}).fetch(), '_id');
    var domain_ids = _.uniq(user_domains.concat(subscribe_domains));
    return Domain.find({'_id': {$in: domain_ids}});
});

Meteor.publish('paymentbank', function(domainId){
    return PaymentBank.find({'domainId': domainId});
});

Meteor.publish('subscribers', function(domainId) {
    return Subscribers.find({'domainId': domainId});
});

Meteor.publish('transactions', function(domainId) {
    return Transactions.find({'domainId': domainId});
});