// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const routeAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('routeAnimation', [

        transition('asset-entry => asset-add', [
            // make sure the new page is hidden first
            query(':enter', style({ opacity: 1 })),
            // animate the leave page away
            query(':leave', [
              animate('0.5s', style({ opacity: 0 })),
              style({ display: 'none' })
            ]),
            // and now reveal the enter
            query(':enter', animate('0.5s', style({ opacity: 1 }))),
          ])
    ]);
