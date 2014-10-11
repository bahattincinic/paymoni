Domain = new Meteor.Collection("domain");

Domain.allow({
    update: function (userId, doc, fields, modifier) {
        return doc.userId == userId;
    },
    remove: function (userId, doc) {
        return doc.userId == userId;
    }
});

