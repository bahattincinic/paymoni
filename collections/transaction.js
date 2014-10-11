Transaction = new Meteor.Collection("transaction");

Transaction.allow({
    remove: function (userId, doc) {
        return false;
    },
    update: function (userId, doc, fields, modifier) {
        return false;
    }
});
