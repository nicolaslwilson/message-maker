import {Layout} from './layout.js';
import {DataInterface} from './data-interface.js';
import {MessageDisplay} from './message-display.js';
import {TemplateInterface} from './template-interface.js';

export class MessageMakerInterface extends Layout {

    constructor(pageTitle, app) {
			super(pageTitle);
			this.app = app;
			this.dataInterface = new DataInterface(this.app);
			this.messageDisplay = new MessageDisplay(this.app.message);
			this.templateInterface = new TemplateInterface(this.app.templateData);
		}

		createElement() {
			super.createElement();
			this.dataInterface.appendToElement(this.element);
			this.templateInterface.appendToElement(this.element);
			this.messageDisplay.appendToElement(this.element);
		}

		getElementString() {
			return `<main class="mdc-layout-grid"></main>`;
		}



}
