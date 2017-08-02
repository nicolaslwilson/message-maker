import {Select} from './select.js';
import {Button} from './button.js';
import {Grid} from './grid.js';
import {GridCell} from './grid-cell.js';
import {Template} from '../classes/template.js';

export class DataInterface extends Grid {
	constructor(app) {
		super()
		this.app = app;
	}

	createElement() {
		super.createElement();
		let gridCell = new GridCell(3);
		gridCell.createElement();

		let appData = this.app.templateData;

		let hotelSelect = new Select(appData.hotels, 'company');
		hotelSelect.appendToElement(this.element).wrap(gridCell.element);
		hotelSelect.component.listen('MDCSelect:change', () => {
			appData.hotel = hotelSelect.getSelection();
		});

		let guestSelect = new Select(appData.guests, 'firstName');
		guestSelect.appendToElement(this.element).wrap(gridCell.element);
		guestSelect.component.listen('MDCSelect:change', () => {
			appData.guest = guestSelect.getSelection();
		});

		let templateSelect = new Select(appData.templates, 'title');
		templateSelect.appendToElement(this.element).wrap(gridCell.element);
		templateSelect.component.listen('MDCSelect:change', () => {
			let template = new Template();
			template.loadTemplateData(templateSelect.getSelection().elements);
			appData.template = template;
			this.app.messageMakerInterface.templateInterface.renderTemplate();
		});

		let makeMessageButton = new Button('Generate');
		makeMessageButton.appendToElement(this.element).wrap(gridCell.element);
		makeMessageButton.element.on('click', () => {
			let message = appData.template.getContent(appData);
			this.app.message = message;
		});

		this.element.addClass('data-interface');
		return this.element;
	}
}

