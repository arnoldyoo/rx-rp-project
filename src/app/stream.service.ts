import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class StreamService {
  startupStream: Observable<any>;
  responseStream: Observable<any>;

  constructor() { }

  setStartupStream(url: string) {
    this.startupStream = Observable.of(url);
  }

  setResponseStream() {
    this.responseStream = this.startupStream.flatMap(url => {
      return Observable.fromPromise($.getJSON(url));
    });
  }

  getResponseStream(): Observable<any> {
    return this.responseStream;
  }

}
