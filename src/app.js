import $ from 'jquery';
import 'material-components-web/dist/material-components-web.css';
import './style.css';
import {MessageDataService} from './services/message-data-service.js';
import {MessageMakerInterface} from './ui/message-maker-interface.js';
// import {Template} from './classes/template.js';

export class App {
	constructor(defaultMessage){
		this._message = defaultMessage;
		this.templateData = {};
		this.dataService = new MessageDataService();
	}

	initialize() {
		let dataService = new MessageDataService();
		dataService.loadData()
			.then((result) => {
				this.templateData = result;
				let app = this;
				this.messageMakerInterface = new MessageMakerInterface('Message Maker', app);
				this.messageMakerInterface.appendToElement($('body'));
			});
	}

	get message () {
		return this._message;
	}

	set message(message) {
		this._message = message;
		this.messageMakerInterface.messageDisplay.updateMessage(this._message);
	}
}

let defaultMessage = 'Click the generate button to create a new message from a template!';
export let app = new App(defaultMessage);
app.initialize();

