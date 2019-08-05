import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
//declare var $: any; //old code..

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elem.nativeElement.querySelectorAll('.navbar-nav>li>a').forEach((el) => {
      el.addEventListener('click', () => {
        this.elem.nativeElement.querySelector('.navbar-toggler').classList.toggle('collapsed');
        this.elem.nativeElement.querySelector('.navbar-collapse').classList.toggle('show');
      });
    })

    //old code...
    // $('.navbar-nav>li>a').on('click', function () {
    //   $('.navbar-collapse').collapse('hide');
    // });
  }

}
