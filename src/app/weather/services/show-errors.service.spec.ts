import { ShowErrorsService } from './show-errors.service';

describe('ShowErrorsService', () => {
	const error = new ShowErrorsService();

	it('it should return message when the input is empty', () => {
		expect(error.showError('emptyInput')).toEqual(
			'Enter the name of the town/city and search'
		);
	});
	it('it should return message when server returns no data', () => {
		expect(error.showError('noData')).toEqual(
			'Unfortunately, this town/city was not found. Please enter another one and search again'
		);
	});
	it('it should return message when someting went wrong', () => {
		expect(error.showError('serverErr')).toEqual(
			'There is an issue with a search or request, please try your search again later.'
		);
	});
	it('it should return message when the browser do not have a geolocation', () => {
		expect(error.showError('noGeo')).toEqual(
			'Sorry, but your browser does not support geolocation. Please enter the name of the town/city and search again'
		);
	});
	it('it should return default message on other bugs', () => {
		expect(error.showError('')).toEqual(
			'Sorry, an error occurred. Please try again.'
		);
	});
});
