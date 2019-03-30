import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  public students;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost/php_rest_api/api/shop_details/student_detail.php')
      .subscribe(response => {
        this.students = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
