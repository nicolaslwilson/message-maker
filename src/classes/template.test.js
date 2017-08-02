import {expect} from 'chai';
import {Greeting} from './greeting.js';
import {TemplateElement} from './template-element.js';
import {TemplateVariable} from './template-variable.js';
import {Template} from './template.js';

describe('Template Class', function () {
	let data = {
		hotel: {
			timezone: 'US/Central'
		},
		guest: {
			firstName: 'Bart',
			lastName: 'Simpson',
			reservation: {
				roomNumber: 385,
				startTimestamp: 1486612719,
				endTimestamp: 1486694720
			}
		}
	};
	let greetingStrings = {
		morning: "Good morning ",
		afternoon: "Good afternoon ",
		evening: "Good evening "
	};
	let greeting = new Greeting(greetingStrings);
	let firstName = new TemplateVariable('guest.firstName');
	let roomNumber = new TemplateVariable('guest.reservation.roomNumber');
	let placeholder = new TemplateElement('. Your room number is ');
	let template = new Template();
	template.addTemplateElement(greeting);
	template.addTemplateElement(firstName);
	template.addTemplateElement(placeholder);
	template.addTemplateElement(roomNumber);
	it('should out put a string', function() {
		let templateOutput = template.getContent(data);
		expect(templateOutput).to.be.a('string');
	})
});
