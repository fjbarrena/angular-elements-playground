import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  constructor(private readonly httpClient: HttpClient) { }

  public getTwitts(): Observable<any> {
    return this.httpClient.post(
      'http://localhost:9200/spark/_search?q=vlcsofting18',
      {
        'size': 10000,
        'from': 0,
        'query':
        {
          'term' : { 'text' : 'vlcsofting18' }
        }
      });
  }
}
