import { Component, OnInit } from "@angular/core";
import { Student } from "../../models/student";
import { StudentService } from "../../services/student.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      console.log(students);
    });
  }
}
