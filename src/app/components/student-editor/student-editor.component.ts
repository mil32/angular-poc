import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Student } from "../../models/student";
import { StudentService } from "src/app/services/student.service";

@Component({
  selector: "app-student-editor",
  templateUrl: "./student-editor.component.html",
  styleUrls: ["./student-editor.component.scss"]
})
export class StudentEditorComponent implements OnInit {
  student: Student = new Student();
  studentForm: FormGroup;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      firstName: new FormControl(this.student.firstName, Validators.required),
      lastName: new FormControl(this.student.lastName, Validators.required),
      dni: new FormControl(this.student.dni, Validators.required),
      email: new FormControl(this.student.email, Validators.email),
      address: new FormControl(this.student.address)
    });
  }

  onSubmit() {
    this.student = this.studentForm.value;
    this.studentService.addStudent(this.student).subscribe(res => {
      if (res.status == 200) {
        this.studentForm.reset();
      }
    });

    console.log(this.studentForm.value);
  }
}
