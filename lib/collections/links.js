// Definition of the links collection

// import { Mongo } from 'meteor/mongo';

// export const Links = new Mongo.Collection('links');

Links = new Mongo.Collection('links');

Links.allow({
	insert: function (userId, item) { return true; },
	update: function (userId, item) { return true; },
	remove: function (userId, item) { return true; }
});

