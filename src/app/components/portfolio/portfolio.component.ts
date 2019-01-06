import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public constructor(private titleService: Title, private meta: Meta) { 
    this.titleService.setTitle("Judson Designs Portfolio");
    meta.addTags([
      { name: 'author', content: 'Judson Terrell' },
      { name: 'description', content: 'Judson Terrell can build your next website! Judson Designs is a web design company owned by Judson Terrell and is based in Charlotte, NC. Judson Terrell apecializes in MEAN stack development portfolio.' },
      { name: 'keywords', content: 'Judson Terrell, Judson Design, Judson Designs, Web Design, UI Developer, UI Design, Angular JS, Angular.js, HTML5, Javascript, CSS, Judson Terrell, portfolio' }
    ]);
  }

  ngOnInit() {
  }

}
