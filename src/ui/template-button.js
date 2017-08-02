import {BaseElement} from './base-element.js';

export class TemplateButton extends BaseElement {
	constructor(type, content) {
		super();
		this.type = type;
		this.content = content;
	}

	getElementString() {
		return `<div class="mdc-button template-element template-button ${this.type}">
							${this.content}
						</div>`;
	}
}
