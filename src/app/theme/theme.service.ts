import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: Subject<string> = new Subject<string>();
  theme = this._theme.asObservable();
  constructor() { }

  setTheme(theme: string) {
    this._theme.next(theme);
  }
}
