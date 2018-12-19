import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments =  [
    {"id":1, "department_name": "Angular", "age": 23},
    {"id":2, "department_name": "PHP", "age": 24},
    {"id":3, "department_name": "Mongo DB", "age": 26},
    {"id":4, "department_name": "Pradeep", "age": 25}
];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id])
  }

}
