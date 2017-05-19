import { Observable } from 'rxjs/Rx';
import { StreamService } from './../stream.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  suggestionStream: Observable<any>;
  @ViewChild('closebtn') closeBtn: ElementRef;

  constructor(
    private streamS: StreamService
  ) { }

  ngOnInit() {
    this.streamS.setCloseClickStream(this.closeBtn.nativeElement, 'click');
    this.streamS.setSuggestionStream();
    this.suggestionStream = this.streamS.getSuggestionStream();
    this.suggestionStream.subscribe(user => {
      this.user = user;
    });
  }
}

