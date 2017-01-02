var mongoose = require('mongoose');
module.exports = new mongoose.Schema({


	
		firstname: {
			type:String,
			required:true,

		},
		lastname: {
			type:String,
			required:true,

		},
		gender: {
			type:String,
			required:true,

		},
		email: {
			type:String,
			required:true,
			match:/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim
		},

		address: {
			type : String,
			required: true
		},
		city: {
			type: String,
			required: true,
			lowercase: true
		},
		zip: {
			type:String,
			required:true
			
		},
		state:{
			type:String,
			required:true
		},
		orders:{
			type:Number,
			default:0
		}
		



		
});