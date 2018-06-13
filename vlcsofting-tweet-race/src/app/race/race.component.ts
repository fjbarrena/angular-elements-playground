import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';
@Component({
  selector: 'app-race',
  // templateUrl: './race.component.html',
  template: "<div id='angularRace'>Angular tiene {{angular}} votos</div><div id='bigdataRace'>BigData tiene {{bigdata}} votos</div>",
  // styleUrls: ['./race.component.css'],
  // providers: [ElasticsearchService],
  encapsulation: ViewEncapsulation.Native
})
export class RaceComponent implements OnInit {
  public carhacking: number;
  public angular: number;
  public bigdata: number;

  constructor(private readonly elasticService: ElasticsearchService) {
    this.carhacking = 0;
    this.angular = 0;
    this.bigdata = 0;
  }

  ngOnInit() {
    this.elasticService.getTwitts().subscribe((data) => {
      console.log(data);

      data.hits.hits.forEach(element => {
        element._source.hashtags.forEach(hashtag => {
          switch (hashtag.text) {
            case 'carhacking':
              console.log('Voto para carhacking');
              this.carhacking = this.carhacking + 1;
              break;
            case 'angular':
              console.log('Voto para angular');
              this.angular = this.angular + 1;
              break;
            case 'bigdata':
              console.log('Voto para bigdata');
              this.bigdata = this.bigdata + 1;
              break;
            default:
              console.log('Voto nulo!');
              // this.angular = this.angular + 1;
              break;
          }
        });
      });
    });
  }

}
