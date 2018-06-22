import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  theme: Observable<string>;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.theme = this.themeService.theme;
  }

  setTheme(theme: string) {
    console.log(theme);
    this.themeService.setTheme(theme);
  }
}
