import {Grid} from './grid.js';
import {GridCell} from './grid-cell.js';

export class MessageDisplay extends Grid {
	constructor(message) {
		super()
		this.message = message;
	}

	createElement() {
		super.createElement();
		let gridCell = new GridCell(12);
		gridCell.appendToElement(this.element);
		gridCell.element.append(`<p class="message mdc-typography--body1">${this.message}</p>`);
	}

	updateMessage(message) {
		this.message = message;
		this.element.children().first().html(`<p class="message mdc-typography--body1">${this.message}</p>`);
	}

}
