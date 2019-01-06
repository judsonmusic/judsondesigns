import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public constructor(private titleService: Title, private meta: Meta ) { 
    this.titleService.setTitle("Judson Designs Blog");
    meta.addTags([
      { name: 'author', content: 'Judson Terrell' },
      { name: 'description', content: 'Judson Terrell can build your next website! Judson Designs is a web design company owned by Judson Terrell and is based in Charlotte, NC. Judson Terrell apecializes in MEAN stack development blog.' },
      { name: 'keywords', content: 'Judson Terrell, Judson Design, Judson Designs, Web Design, UI Developer, UI Design, Angular JS, Angular.js, HTML5, Javascript, CSS, Judson Terrell, blog' }
    ]);
  }

  ngOnInit() {
  }

}
