import {expect} from 'chai';
import moment from 'moment-timezone';
import {Greeting} from './greeting.js';

describe('Tests Greeting Template Element', function () {
	let data = {
		hotel: {
			timezone: 'US/Central'
		}
	};
	let greetingStrings = {
		morning: "Good morning",
		afternoon: "Good afternoon",
		evening: "Good evening"
	};
	let greeting = new Greeting(greetingStrings);
	it('Should be a function', function () {
		expect(Greeting).to.be.a('function');
	});
	it('Should get the local time for the hotel', function () {
		expect(greeting.getLocalTime(data).format()).to.equal(moment().tz('US/Central').format());
	})
	it('Local time should be different than the time from another time zone', function() {
		expect(greeting.getLocalTime(data)).to.not.equal(moment().tz('US/Pacific').format());
	})
	it('Should output a string', function () {
		expect(greeting.getContent(data)).to.be.a('string');
	});
});
