# browser-size-service-angular2


This is an injectable service for Angular 2+ components that exposes a method to get the current window width. It supports auto updating whenever the browser width is changed.

#### Example usage
```
import {Component, OnInit} from '@angular/core';
import {BrowserWidthService} from 'path/to/the/file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  width: string;
  
  constructor(
    public browserWidthService: BrowserWidthService
  ) {}
  
  ngOnInit() {
    this.browserWidthService.getWidth.subscribe(width => {
      this.width = width;
    }
  }
