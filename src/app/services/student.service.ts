import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://utn2019-avanzada2-tp8.herokuapp.com/';
  studentsApi = 'api/students';

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + this.studentsApi);
  }
}
