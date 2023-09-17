import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrentWeatherAPI } from '../interfaces/current-weather-api';
import { ForecastWeatherAPI } from '../interfaces/forecast-weather-api';
import { Location } from '../interfaces/location';

@Injectable({
	providedIn: 'root',
})
export class GetWeatherData {
	apiKey: string = '3b8e327f3c034c3082026732c70fe049';
	apiUrl: string = 'https://api.weatherbit.io/v2.0/';
	lang: string = 'en';
	target!: string;
	urlParams!: HttpParams;

	constructor(private http: HttpClient) {}

	setParams(location: any, target?: string) {
		this.urlParams = new HttpParams();
		if (target === 'inputBtn' || target === 'enter') {
			this.urlParams = this.urlParams.append('city', location.city);
		} else {
			this.urlParams = this.urlParams.append('lat', location.latitude);
			this.urlParams = this.urlParams.append('lon', location.longitude);
		}
		this.urlParams = this.urlParams.append('key', this.apiKey);
		this.urlParams = this.urlParams.append('lang', this.lang);
	}

	getCurrentWeatherData(location: Location, target?: string) {
		this.setParams(location, target);
		return this.http.get<CurrentWeatherAPI>(`${this.apiUrl}current?`, {
			params: this.urlParams,
		});
	}

	getForecastWeatherData(location: Location, target?: string) {
		this.setParams(location, target);
		return this.http.get<ForecastWeatherAPI>(`${this.apiUrl}forecast/daily?`, {
			params: this.urlParams,
		});
	}
}
