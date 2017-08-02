import $ from 'jquery';
import {Grid} from './grid.js';
import {GridCell} from './grid-cell.js';
import {Button} from './button.js';
import {Dialog} from './dialog.js';
import {Select} from './select.js';
import {TEMPLATE_ELEMENT_TYPES} from '../constants.js';

// This class creates the interface for interacting with the template
export class TemplateInterface extends Grid {
	constructor(templateData) {
		super();
		this.templateData = templateData;
	}

	createElement() {
		super.createElement();

		// Some instructions for using the interface
		let interfaceHeader = new GridCell(12);
		interfaceHeader.appendToElement(this.element);
		interfaceHeader.element.addClass('mdc-typography');
		let interfaceTitle = $('<h3>')
			.text('Current Template')
		let interfaceInstructions = $('<p>')
			.text('Click a template element to make changes');
		interfaceHeader.element.append([interfaceTitle, interfaceInstructions]);

		//Interface for viewing and interacting with template components
		let templateDisplay = new GridCell(12);
		templateDisplay.appendToElement(this.element);
		templateDisplay.element.addClass('template-display');
		this.element.on('click', this.renderTemplate.bind(this));
		this._createInterfaceControls();
		this._createEventListeners();

		this.element.addClass('template-interface');
		this.renderTemplate();
		return this.element;
	}

	// Get HTML elements representing a template object so they can be displayed on the DOM
	getTemplateElementList() {
		let templateElements = this.templateData.template.elements.map((templateElement) => {
			return templateElement.getHTML().element;
		});
		return templateElements;
	}

	// Render the template element on the DOM
	renderTemplate(){
		let templateElementsList = this.getTemplateElementList();
		let templateDisplay = this.element.children('.template-display');
		templateDisplay.empty();
		templateDisplay.append(templateElementsList);
		templateElementsList.forEach(function(templateElement, index) {
			let deleteButton = `<i class="material-icons remove-template-element" data-index="${index}">delete_forever</i>`;
			templateElement.after($(deleteButton));
		}, this);
	}

	_createInterfaceControls() {
		//Create container for the interface controls
		let interfaceControls = new GridCell(12);
		interfaceControls.appendToElement(this.element);
		interfaceControls.element.addClass('template-controls');

		//Create interface buttons
		this.addTemplateElementSelect = new Select (TEMPLATE_ELEMENT_TYPES, 'type');
		this.addTemplateElementSelect.appendToElement(interfaceControls.element);
		let addTemplateElement = new Button('Add Element');
		addTemplateElement.appendToElement(interfaceControls.element);
		addTemplateElement.element.addClass('addElement');

		let getJSONButton = new Button('Get JSON');
		getJSONButton.appendToElement(interfaceControls.element);
		getJSONButton.element.addClass('getJSON');

		interfaceControls.element.children('button').addClass('template-button');
	}

	_createEventListeners() {
		this.element.on('click', '.remove-template-element', this.removeTemplateElement.bind(this));
		this.element.on('click', '.addElement', this.addTemplateElement.bind(this));
		this.element.on('click', '.getJSON', this.getJSON.bind(this));
	}

	addTemplateElement() {
		let element = this.addTemplateElementSelect.getSelection();
		this.templateData.template.loadTemplateData([element]);
		this.renderTemplate();
	}

	removeTemplateElement(event){
		let index = $(event.target).data('index');
		this.templateData.template.removeTemplateElement(index);
		this.renderTemplate();
	}

	getJSON() {
		//Get JSON from template and stringify it
		let templateJSON = JSON.stringify(this.templateData.template.getJSON());
		let dialog = new Dialog('Template JSON', templateJSON);
		dialog.appendToElement($('body'));
		dialog.component.show();
		dialog.component.listen('MDCDialog:accept', () => {
			dialog.component.destroy();
			dialog.element.remove();
		});
		dialog.component.listen('MDCDialog:cancel', () => {
			dialog.component.destroy();
			dialog.element.remove();
		});
	}


}
