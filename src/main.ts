import {
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { importProvidersFrom, Injectable } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { pexels } from './enviroment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const pexelsInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = pexels.API_KEY;
  if (!pexels || !pexels.API_KEY) return next(req);
  return next(req.clone({ setHeaders: { Authorization: apiKey } }));
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([pexelsInterceptor])),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.log(err));
