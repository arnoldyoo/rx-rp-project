import { StreamService } from './stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rx-rp-project';
  gitUserList: Array<any>;

  constructor(
    private streamS: StreamService
  ) { }

  ngOnInit() {
    this.streamS.setStartupStream('https://api.github.com/users');
    this.streamS.setResponseStream();
    this.streamS.getResponseStream().subscribe(list => {
      this.gitUserList = list;
    });

  }

}
