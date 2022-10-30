import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../widgets/Know-more_widgets/header/header.component';
import { NavbarComponent } from '../widgets/Know-more_widgets/navbar/navbar.component';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavbarComponent],
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
