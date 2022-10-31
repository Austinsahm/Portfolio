import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
