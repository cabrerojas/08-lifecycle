import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component
          implements OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked,
          OnDestroy {


  nombre = 'Guillermo';
  segundos = 0;
  timerSubscription!: Subscription;


  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    // tslint:disable-next-line: deprecation
    this.timerSubscription = interval(1000).subscribe(
      i => {
        this.segundos = i;

      }
    );


  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');

    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado');


  }

  // tslint:disable-next-line: typedef
  ngOnChanges(){
    console.log('ngOnChanges');
  }



  guardar(): void {

  }

}
