import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';

@Directive({
  selector: '[appProgress]'
})
export class ProgressDirective implements OnInit {
  @Input() appProgress: string;

  constructor(
    private readonly elasticService: ElasticsearchService,
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.elasticService.getTwitts().subscribe((data) => {
      let count: number = 0;

      console.log(data);
      let total: number = data.hits.total;

      data.hits.hits.forEach(element => {
        element._source.hashtags.forEach(hashtag => {
          switch (hashtag.text) {
            case this.appProgress:
              count++;
              break;
            default:
              break;
          }
        });
      });
      console.log('Votos totales para ' + this.appProgress + ': ' + count);
      console.log('calculando porcentaje...');

      // El conteo de twitts tiene algunos errores, por eso tiramos por encima...
      const porcentaje = (count / total) * 700;

      this.renderer.setStyle(this.elRef.nativeElement, 'width', porcentaje + '%');
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.randomColor());
      this.renderer.setStyle(this.elRef.nativeElement, 'color', this.randomColor());
      if (count === 0) {
        this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
      }
    });
  }

  private randomColor(): string {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  }

}
