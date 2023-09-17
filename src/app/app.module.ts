import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { InterceptorService } from './components/preloader/services/interceptor.service';
import { NumericValidatorDirective } from './numeric-validator.directive';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		HeaderComponent,
		FooterComponent,
		WeatherComponent,
		PreloaderComponent,
  NumericValidatorDirective,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
