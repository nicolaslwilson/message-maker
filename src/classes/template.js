import {Greeting} from './greeting.js';
import {TemplateElement} from './template-element.js';
import {TemplateVariable} from './template-variable.js';
import {CheckInTime} from './check-in-time.js';

export class Template {
	constructor () {
		this.elements = [];
	}

	loadTemplateData(array) {
		for (let element of array) {
			let newElement;
			switch(element.type) {
				case 'Greeting':
					newElement = new Greeting(element.content);
					break;
				case 'TemplateElement':
					newElement = new TemplateElement(element.content);
					break;
				case 'TemplateVariable':
					newElement = new TemplateVariable(element.content);
					break;
				case 'CheckInTime':
					newElement = new CheckInTime();
					break;
				case 'Template':
					newElement = new Template();
					newElement.loadTemplateData(element.elements);
					break;
				default:
					console.error('Invalid element', element); // eslint-disable-line no-console
			}
			if (newElement) {
				this.elements.push(newElement);
			}
		}
	}

	getJSON() {
		let templateJSON = {
			type: 'Template',
			elements: []
		};
		templateJSON.elements = this.elements.map(function (element) {
			return element.getJSON();
		});
		return templateJSON;
	}


	getContent(data) {
		return this.insertData(data).join('');
	}

	insertData (data) {
		return this.elements.map(function (element) {
			return element.getContent(data);
		});
	}

	addTemplateElement(element) {
		this.elements.push(element);
	}

	removeTemplateElement(index){
		this.elements.splice(index, 1);
	}

}
