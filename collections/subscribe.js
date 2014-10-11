Subscribe = new Meteor.Collection("subscribe");

Subscribe.allow({
    update: function (userId, doc, fields, modifier) {
        return false;
    },
    remove: function (userId, doc) {
        var domain = Domain.findOne({'_id': doc.domainId});
        return domain.userId == userId;
    }
});
