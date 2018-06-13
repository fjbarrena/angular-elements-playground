import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';
@Component({
  selector: 'app-race',
  // templateUrl: './race.component.html',
  // tslint:disable-next-line:max-line-length
  template: '<div *ngFor="let tag of hashtags" [appProgress]="tag" style="display:block; min-width: 237px; margin-bottom:20px; height: 50px; padding-bottom: 10px; text-align: center;  padding-top: 10px;">{{tag}} tiene <span [appBoom]="tag"></span> votos</div>',
  // styleUrls: ['./race.component.css'],
  // providers: [ElasticsearchService],
  encapsulation: ViewEncapsulation.Native
})
export class RaceComponent implements OnInit {

  public hashtags: string[] = ['angular', 'agilidad', 'singularidad', 'carhacking', 'bueninformatico', 'integracion',
                               'dataops', 'ia', 'microservicios', 'fingerprint', 'analytics', 'cuanticos', 'bigdata',
                               'pwa', 'blockchain', 'bi'];

  constructor() {

  }

  ngOnInit() {
  }

}
