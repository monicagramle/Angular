import { Injectable } from '@angular/core';
import { Errors } from '../interfaces/errors';

@Injectable({
	providedIn: 'root',
})
export class ShowErrorsService {
	error: string = '';

	errorMessages: Errors = {
		emptyInput: 'Enter the name of the town/city and search',
		noData: 'Unfortunately, this town/city was not found. Please enter another one and search again',
		serverErr: 'There is an issue with a search or request, please try your search again later.',
		geolocationErr: 'Sorry, but your browser does not support geolocation. Please enter the name of the town/city and search again',
		noContent: 'No such location found, please try with a valid location',
		default: 'Sorry, an error occurred. Please try again.',
	};

	problemCode!: string;

	showError = (problemCode: string): string => {
		switch (problemCode) {
			case 'emptyInput':
				return (this.error = this.errorMessages.emptyInput);
				break;

			case 'serverErr':
				return (this.error = this.errorMessages.serverErr);
				break;

			case 'noData':
				return (this.error = this.errorMessages.noData);
				break;

			case 'noGeo':
				return (this.error = this.errorMessages.geolocationErr);
				break;

			case 'noContent':
				return (this.error = this.errorMessages.noContent);
				break;

			default:
				return (this.error = this.errorMessages.default);
				break;
		}
	};
}
