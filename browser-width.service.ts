import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class BrowserWidthService {
    width: Observable<string>;
    constructor() {
        let windowSize$ = new BehaviorSubject(this.getDisplayMode());
        this.width = (windowSize$.pluck('width') as Observable<string>).distinctUntilChanged();
        Observable.fromEvent(window, 'resize')
            .map(this.getDisplayMode)
            .subscribe(windowSize$);
    }

    getWidth(): number {
       return window.innerWidth;
    }
}
