Domain.allow({
    insert: function (userId, doc) {
        if(Meteor.users.findOne({'_id': doc.userId})){
            return true;
        }
        return false;
    },
    update: function (userId, doc, fields, modifier) {
        return doc.userId === userId;
    },
    remove: function (userId, doc) {
        return doc.userId === userId;
    },
    fetch: ['owner']
});

PaymentBank.allow({
    insert: function (userId, doc) {
        if(Meteor.users.findOne({'_id': doc.userId})){
            return true;
        }
        return false;
    },
    update: function (userId, doc, fields, modifier) {
        return doc.userId === userId;
    },
    remove: function (userId, doc) {
        return doc.userId === userId;
    },
    fetch: ['owner']
});

Subscribers.allow({
    insert: function (userId, doc) {
        if(!Meteor.users.findOne({'_id': doc.userId})){
            return false;
        }
        var domain = Domain.findOne({'_id': doc.domainId})
        if(!domain && domain.userId != userId){
            return false;
        }
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return doc.userId === userId;
    },
    remove: function (userId, doc) {
        return doc.userId === userId;
    },
    fetch: ['owner']
});


Transactions.allow({
    insert: function (userId, doc) {
        if(!Domain.findOne({'_id': doc.domainId})){
            return false;
        }
        if(!PaymentBank.findOne({'_id': doc.bankId})){
            return false;
        }
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return doc.userId === userId;
    },
    remove: function (userId, doc) {
        return doc.userId === userId;
    },
    fetch: ['owner']
});