import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class StreamService {
  startupStream: Observable<any>;
  responseStream: Observable<any>;

  refreshClickStream: Observable<any>;
  requestOnRefreshStream: Observable<any>;

  constructor() { }

  setStartupStream(url: string) {
    this.startupStream = Observable.of(url);
  }

  setRequestOnRefreshStream(selector: any, event_kind: string) {
    this.refreshClickStream = Observable.fromEvent(selector, event_kind);

    this.requestOnRefreshStream = this.refreshClickStream.map(ev => {
      const randomOffset: number = Math.floor(Math.random() * 500);
      return 'https://api.github.com/users?since=' + randomOffset;
    });
  }

  //  ----s-----------------> startupstream
  //  ---------s-----s------> requestOnRefreshSteram
  //          merge
  //  ----s----s-----s------> requestStream
  //      \    \     \
  //       --r  -r    --r
  //          flatmap
  //  --------R-----R----R--> responseSteram

  setResponseStream() {
    const requestStream: Observable<any> = this.startupStream.merge(this.requestOnRefreshStream);
    this.responseStream = requestStream.flatMap((url: string) => Observable.fromPromise($.getJSON(url)));
  }

  getResponseStream(): Observable<any> {
    console.log(this.responseStream);
    return this.responseStream;
  }

}
