import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) { 
    
  }

  ngOnInit() {
    var x = this.employeeService.getEmployees();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onItemClick(employee: Employee){
    //copy object of employee and then assign copied object to selectedEmployee
    //otherwise when we change the fields of employee, the details of selectedEmployee
    //also change if use like this ** this.employeeService.selectedEmployee = employee;
    this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

}
