import { Observable } from 'rxjs/Rx';
import { StreamService } from './../stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  suggestionStream: Observable<any>;
  constructor(
    private streamS: StreamService
  ) { }

  ngOnInit() {
    this.streamS.setSuggestionStream();
    this.suggestionStream = this.streamS.getSuggestionStream();
    this.suggestionStream.subscribe(user => {
      this.user = user;
    });
  }
}

