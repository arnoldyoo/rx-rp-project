import { StreamService } from './stream.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rx-rp-project';
  gitUserList: Array<any>;
  @ViewChild('refreshbtn') refreshbtn: ElementRef;

  constructor(
    private streamS: StreamService,
    private elem: ElementRef
  ) { }

  ngOnInit() {
    this.streamS.setStartupStream('https://api.github.com/users');
    this.streamS.setRequestOnRefreshStream(this.refreshbtn.nativeElement, 'click');

    this.streamS.setResponseStream();

    this.streamS.getResponseStream().subscribe(list => {
      this.gitUserList = list;
    });
  }

}
