import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PexelsService {

  constructor(private httpClient:HttpClient) { }
  baseURL: string = 'https://api.pexels.com/v1/curated'
  getPhotos(page= 1) {
    return this.httpClient.get<any>(`${this.baseURL}`, {params: {per_page:15, page} })
  }



}
