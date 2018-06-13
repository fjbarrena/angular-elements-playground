import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';

@Directive({
  selector: '[appBoom]'
})
export class BoomDirective implements OnInit {
  @Input() appBoom: string;

  constructor(
    private readonly elasticService: ElasticsearchService,
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.elasticService.getTwitts().subscribe((data) => {
      let count: number = 0;
      data.hits.hits.forEach(element => {
        element._source.hashtags.forEach(hashtag => {
          switch (hashtag.text) {
            case this.appBoom:
              count++;
              break;
            default:
              break;
          }
        });
      });
      console.log('Votos totales para ' + this.appBoom + ': ' + count);
      const text = this.renderer.createText('' + count);

      this.renderer.appendChild(this.elRef.nativeElement, text);
    });
  }

}
