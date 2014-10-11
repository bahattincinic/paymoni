Bank = new Meteor.Collection("bank");

Bank.allow({
    update: function (userId, doc, fields, modifier) {
        return false;
    },
    remove: function (userId, doc) {
        return false;
    }
});
