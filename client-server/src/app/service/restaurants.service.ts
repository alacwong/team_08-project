import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private static readonly RO_ENDPOINT = `${environment.endpoint_url}/RO`;

  constructor(private http: HttpClient) {}

  /*
  @Input: None
  @Output: List of all restaurants

  Return list of all restaurants in the database
  */
  listRestaurants(): Observable<any> {
    const endpoint = `${RestaurantsService.RO_ENDPOINT}/getAll/`;
    return this.http.get(endpoint);
  }
}
