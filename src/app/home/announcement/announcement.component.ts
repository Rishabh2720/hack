import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  public count;
  private c;
  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.count = [1];
    this.c = 1;
  }
  onAdd() {
    this.c++;
    this.count.push(this.c);
  }
}
