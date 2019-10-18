import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.scss']
})
export class StudentEditorComponent implements OnInit {
  student: Student = new Student();
  studentForm: FormGroup;
  constructor() {
  }
  ngOnInit(): void {
    this.studentForm = new FormGroup({
      firstName: new FormControl(this.student.firstName),
      lastName: new FormControl(this.student.lastName),
      dni: new FormControl(this.student.dni),
      email: new FormControl(this.student.email),
      address: new FormControl(this.student.address)
    });
  }

  onSubmit() {
    console.log('Student', this.student.firstName);
  }
}
