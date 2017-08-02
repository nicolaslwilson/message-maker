import {BaseElement} from './base-element.js';
import {MDCSelect as mdc} from '@material/select';

export class Select extends BaseElement {
	constructor(array, key) {
		super();
		this.listData = array;
		this.key = key;
	}

	createElement() {
		super.createElement();
		this.element.find('.mdc-list-item').first().attr('aria-selected', true);
		this.component = new mdc.select.MDCSelect(this.element[0]);
	}
	getElementString() {
		let listItems = '';
		for (let listItem of this.listData) {
			listItems += `<li class='mdc-list-item' role='option'>${listItem[this.key]}</li>`
		}
		return `<div class="mdc-select" role="listbox" tabindex="0">
							<span class="mdc-select__selected-text">${this.listData[0][this.key]}</span>
							<div class="mdc-simple-menu mdc-select__menu">
								<ul class="mdc-list mdc-simple-menu__items">
									${listItems}
								</ul>
							</div>
						</div>`
	}
	getSelection() {
		let index = this.component.selectedIndex;
		return this.listData[index];
	}
}
