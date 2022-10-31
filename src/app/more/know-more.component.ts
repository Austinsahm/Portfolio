import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../widgets/Know-more_widgets/header/header.component';
import { NavbarComponent } from '../widgets/Know-more_widgets/navbar/navbar.component';
import { InfoComponent } from '../widgets/Know-more_widgets/info/info.component';
import { MyResumeComponent } from '../widgets/Know-more_widgets/my-resume/my-resume.component';
import { HistoryComponent } from '../widgets/Know-more_widgets/history/history.component';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [CommonModule, HeaderComponent,
    NavbarComponent, InfoComponent, 
    MyResumeComponent, HistoryComponent],
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css'],
})
export class KnowMoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
