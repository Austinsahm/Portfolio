import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../widgets/Know-more_widgets/header/header.component';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
