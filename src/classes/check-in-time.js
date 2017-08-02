import {TemplateElement} from './template-element.js';
import moment from 'moment-timezone';

export class CheckInTime extends TemplateElement {
	getHTML() {
		return super.getHTML('check-in-time', 'Check In Time');
	}

	getJSON() {
		return {
			type: 'CheckInTime'
		};
	}

	editTemplate(){
		alert('This element outputs the start time for a reservation.');
	}

	getContent(data) {
		let checkInTime = parseInt(data.guest.reservation.startTimestamp);
		let timezone = data.hotel.timezone;
		let formattedDataAndTime = moment.unix(checkInTime).tz(timezone).format("dddd, MMMM Do YYYY, h:mm a zz");
		return formattedDataAndTime;
	}
}
