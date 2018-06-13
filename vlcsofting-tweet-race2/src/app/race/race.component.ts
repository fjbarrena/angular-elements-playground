import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';
@Component({
  selector: 'app-race',
  // templateUrl: './race.component.html',
  template: "<div id='angularRace'>Angular tiene <span appBoom='angular'></span> votos</div><div id='bigdataRace'>BigData tiene <span appBoom='bigdata'></span> votos</div>",
  // styleUrls: ['./race.component.css'],
  // providers: [ElasticsearchService],
  encapsulation: ViewEncapsulation.Native
})
export class RaceComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
