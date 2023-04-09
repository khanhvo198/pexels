import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PexelsService {
  constructor(private httpClient: HttpClient) {}
  baseURL: string = 'https://api.pexels.com/v1/';
  getPhotosRandom(page = 0) {
    return this.httpClient.get<any>(`${this.baseURL}/curated`, {
      params: { per_page: 15, page: page + 1 },
    });
  }

  getPhotosWithSearch(page = 0, query: string) {
    return this.httpClient.get<any>(`${this.baseURL}/search`, {
      params: { per_page: 15, page: page + 1, query },
    });
  }
}
