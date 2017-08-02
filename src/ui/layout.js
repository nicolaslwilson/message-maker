import {BaseElement} from './base-element.js';

export class Layout extends BaseElement {

    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
		}

		getElementString() {
			return `<main class="mdc-layout-grid"></main>`;
		}

}
