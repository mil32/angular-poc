import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Student } from "../models/student";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
    // Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private http: HttpClient) {}
  baseUrl = "https://utn2019-avanzada2-tp8.herokuapp.com/";
  studentsApi = "api/students";

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + this.studentsApi);
  }

  addStudent(student: Student): Observable<HttpResponse<Student>> {
    return this.http.post<Student>(this.baseUrl + this.studentsApi, student, {
      ...httpOptions,
      observe: "response"
    });
  }
}
