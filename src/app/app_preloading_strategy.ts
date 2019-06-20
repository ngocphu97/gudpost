import { PreloadingStrategy } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable, timer, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay) => delay
            ? timer(150).pipe(flatMap(_ => load()))
            : load();
        return route
            ? loadRoute(route)
            : of(null);
      }
}
