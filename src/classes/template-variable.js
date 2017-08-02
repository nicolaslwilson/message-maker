import {TemplateElement} from './template-element.js';
import _ from 'lodash';

// Outputs a value from data input based on a path
export class TemplateVariable extends TemplateElement {
	constructor (path = 'guest.firstName') {
		super(path);
	}
	getContent(data) {
		let path = this.content;
		let fallback = this.content;
		// Use lodash's get method to access a particular value for a key path
		return _.get(data, path, fallback);
	}

	getJSON() {
		let templateVariableJSON = super.getJSON();
		templateVariableJSON.type = 'TemplateVariable';
		return templateVariableJSON;
	}

	getHTML() {
		return super.getHTML('template-variable', this.content);
	}

	editTemplate(event) {
		let input = prompt('Please enter a key for a guest or hotel value:', this.content);
		if (input){
			this.content = input;
		} else {
			event.preventDefault();
		}
	}
}
