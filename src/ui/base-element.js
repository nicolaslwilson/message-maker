import $ from 'jquery';

export class BaseElement {
		constructor() {
				this.element = null;  // jQuery object
		}

		appendToElement(el) {
				//If this element doesn't exist, create it
				if (!this.element) {
					this.createElement();
				}
				el.append(this.element);
				return this.element;
		}

		createElement() {
				let s = this.getElementString();
				this.element = $(s);
				return this.element;
		}

		getElementString() {
				throw 'Please override getElementString() in BaseElement';
		}
}
