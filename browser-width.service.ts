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

    getDisplayMode() {
        let a;
        if (window.innerWidth < 415) { a = 'phone'; }
        if (window.innerWidth > 414 && window.innerWidth < 1025) { a = 'tablet'; }
        if (window.innerWidth > 1024) { a = 'desktop'; }
        return {
            width: a
        };
    }
}
