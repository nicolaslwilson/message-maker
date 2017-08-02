import {BaseElement} from './base-element.js';
import * as mdc from '@material/dialog';

export class Dialog extends BaseElement {
	constructor(title, content) {
		super();
		this.title = title;
		this.content = content;
	}

	createElement() {
		super.createElement();
		this.component = new mdc.dialog.MDCDialog(this.element[0]);
	}

	getElementString() {
		return `<aside id="my-mdc-dialog"
							class="mdc-dialog"
							role="alertdialog"
							aria-labelledby="my-mdc-dialog-label"
							aria-describedby="my-mdc-dialog-description">
							<div class="mdc-dialog__surface">
								<header class="mdc-dialog__header">
									<h2 id="my-mdc-dialog-label" class="mdc-dialog__header__title">
										${this.title}
									</h2>
								</header>
								<section id="my-mdc-dialog-description" class="mdc-dialog__body">
									${this.content}
								</section>
								<footer class="mdc-dialog__footer">
									<button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
								</footer>
							</div>
							<div class="mdc-dialog__backdrop"></div>
						</aside>`
	}


}
