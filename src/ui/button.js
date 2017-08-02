import {BaseElement} from './base-element.js';

export class Button extends BaseElement {
	constructor(text) {
		super();
		this.text = text;
	}

	getElementString() {
		return `<button class="mdc-button mdc-button--raised">
  						${this.text}
						</button>`
	}
}
