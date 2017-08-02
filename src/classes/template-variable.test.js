import {expect} from 'chai';
import {TemplateVariable} from './template-variable.js';

describe('Tests Variable Template Element', function () {
	let data = {
		hotel: {
			timezone: 'US/Central'
		}
	};
	let path = 'hotel.timezone';
	let templateVariable = new TemplateVariable(path);
	it('Should be a function', function () {
		expect(TemplateVariable).to.be.a('function');
	});
	it('Should get the timezone for a hotel', function () {
		expect(templateVariable.getContent(data)).to.equal('US/Central');
	});
});
