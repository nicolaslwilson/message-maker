import {BaseElement} from './base-element.js';

export class Grid extends BaseElement {
	constructor() {
		super();
	}

	getElementString() {
		return `<div class="mdc-layout-grid__inner"></div>`
	}
}
