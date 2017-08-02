import 'whatwg-fetch';
import {Template} from '../classes/template.js';

export class MessageDataService {
	constructor() {
	}

	loadData() {
		return Promise.all([
			this._get('./assets/Companies.json')
			.then((result) => {
				return result;
			}),
		this._get('./assets/Guests.json')
			.then((result) => {
				return result;
			}),
		this._get('./assets/Templates.json')
			.then((result) => {
				return result;
			})
		])
		.then((result) => {
			let data = {
				hotels: result[0],
				guests: result[1],
				templates: result[2]
			}
			data.hotel = data.hotels[0];
			data.guest = data.guests[0];
			let template = new Template();
			template.loadTemplateData(data.templates[0].elements);
			data.template = template;
			return data;
		});
	}

	_get(url) {
		return fetch(url).then(this._onSuccess, this._onError);
	}

	_onSuccess(response) {
		return response.json();
	}

	_onError(error) {
		console.log(error); //eslint-disable-line no-console
	}

}
