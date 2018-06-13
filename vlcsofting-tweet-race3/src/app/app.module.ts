import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RaceComponent } from './race/race.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { ElasticsearchService } from './elasticsearch.service';
import { BoomDirective } from './boom.directive';
import { ProgressDirective } from './progress.directive';

@NgModule({
  declarations: [
    RaceComponent,
    BoomDirective,
    ProgressDirective
  ],
  entryComponents: [
    RaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ElasticsearchService
  ]
})
export class AppModule {
  constructor(private readonly injector: Injector) {
  }

  ngDoBootstrap() {
    const customRace = createCustomElement(RaceComponent, { injector: this.injector });
    customElements.define('softing-race', customRace);
  }
}


