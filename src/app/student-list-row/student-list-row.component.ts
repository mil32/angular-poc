import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list-row',
  templateUrl: './student-list-row.component.html',
  styleUrls: ['./student-list-row.component.scss']
})
export class StudentListRowComponent implements OnInit {
  @Input() student: Student;

  constructor() { }



  ngOnInit() {
  }

}
