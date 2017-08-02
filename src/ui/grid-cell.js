import {BaseElement} from './base-element.js';

export class GridCell extends BaseElement {
	constructor(columns) {
		super();
		this.columns = columns;
	}

	getElementString() {
		let columnWidthString = '';
		if (this.columns) {
			columnWidthString = `mdc-layout-grid__cell--span-${this.columns}`;
		}
		return `<div class="mdc-layout-grid__cell ${columnWidthString}"></div>`
	}
}
