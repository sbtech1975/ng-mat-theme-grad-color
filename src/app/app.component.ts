import { ThemeService } from './theme/theme.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: Observable<string>;
  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.theme = this.themeService.theme;
  }
}
