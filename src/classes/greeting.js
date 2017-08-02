import {TemplateElement} from './template-element.js';
import moment from 'moment-timezone';
import _ from 'lodash';

// The greeting template element is used to generate a greeting based on the local time of day
export class Greeting extends TemplateElement {
	constructor(greetings = {
		morning: 'Good morning ',
		afternoon: 'Good afternoon ',
		evening: 'Good evening '}
	) {
		super(greetings);
		this.morning = greetings.morning;
		this.afternoon = greetings.afternoon;
		this.evening = greetings.evening;
		this.default = "Hello";
	}

	//This method is used by the Template to assemble the template content.
	getContent(data) {
		return this.selectGreeting(data);
	}

	//Returns a greetings based on the time of day
	selectGreeting (data) {
		let hour = this.getLocalTime(data).hour(),
			greeting = this.default;
		if (hour < 12) {
			greeting = this.morning;
		} else if (hour >= 12 && hour < 19 ) {
			greeting = this.afternoon;
		} else {
			greeting = this.evening;
		}
		return greeting;
	}

	//Return the current local time for the hotel
	getLocalTime (data) {
		let timezone = data.hotel.timezone;
		return moment().tz(timezone);
	}

	getJSON() {
		let greetingJSON = super.getJSON();
		greetingJSON.type = 'Greeting';
		return greetingJSON;
	}

	getHTML() {
		return super.getHTML('greeting', 'Greeting');
	}

	editTemplate(event) {
		// Use lodash values to create an array from the greeting content object
		let content = _.values(this.content)
		content = content.join('|');
		let input = prompt('Please enter greetings for morning, afternoon and evening. Each greeting should be separated by a | character.', content);
		if (input){
			//Split the input into an array and then destructure that into variables
			let [morning, afternoon, evening] = input.split('|');
			this.content = {morning, afternoon, evening};
		} else {
			event.preventDefault();
		}
	}

	set content(greeting) {
		this._content = greeting;
		this.morning = greeting.morning;
		this.afternoon = greeting.afternoon;
		this.evening = greeting.evening;
	}

	get content() {
		return this._content;
	}
}
