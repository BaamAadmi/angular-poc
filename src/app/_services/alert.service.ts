import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;
    private timeout: Number = 2000;
    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, persist?: Boolean) {
        this.setMessage(message, "success", persist);
    }

    confirm(message: string, siFn: () => void, noFn: () => void) {
        this.setConfirmation(message, siFn, noFn);
    }

    error(message: string, persist?: Boolean) {
        this.setMessage(message, "error", persist);
    }

    warning(message: string, persist?: Boolean) {
       this.setMessage(message, "warning", persist);
    }

    print(message: string, persist?: Boolean) {
       this.setMessage(message, "print", persist);
    }

    private openBox() {
        this.subject.next({ type: "box-content", text: "box-content" });
    }

    private  setMessage(message: string, type?: string, persist?: Boolean) {
        this.keepAfterNavigationChange = false;
        this.subject.next({ type: type, text: message });
        if (!persist) {
            const thisRef = this;
            setTimeout(function() {
                thisRef.subject.next();
            }, this.timeout);
        }
    }

    private setConfirmation(message: string, siFn: () => void, noFn: () => void) {
        const thisRef = this;
        this.subject.next({ type: "confirm",
            text: message,
            siFn:
            function() {
                thisRef.hideMessage();
                siFn();
            },
            noFn: function() {
                thisRef.hideMessage();
                noFn();
            }
        });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    hideMessage() {
        this.subject.next();
    }

}
