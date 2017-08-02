import {TemplateButton} from '../ui/template-button.js';

//Outputs a static string
export class TemplateElement {
	constructor (content = 'Static template text goes here') {
		this.content = content;
	}

	getContent () {
		return this.content;
	}

	getJSON() {
		return {
			type: 'TemplateElement',
			content: this.content
		}
	}

	getHTML(type = 'template-string', content = this.content) {
		let templateButton = new TemplateButton(type, content);
		templateButton.createElement();
		templateButton.element.on('click', this.editTemplate.bind(this));
		return templateButton;
	}

	editTemplate(event) {
		let input = prompt('Please enter a new template string:', this.content);
		if (input){
			this.content = input;
		} else {
			event.preventDefault();
		}
	}
}
