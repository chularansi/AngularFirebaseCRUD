//import { Message } from './../../../shared/message';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../../../shared/message';

import * as AlertifyJS from 'alertifyjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
message: Message;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.$key == null){
      this.employeeService.insertEmployee(form.value);      
    }else{
      this.employeeService.updateEmployee(form.value);
    }

    this.resetForm(form);
  }

  resetForm(form? : NgForm){
    if(form != null){
      form.reset();
    }
    
    this.employeeService.selectedEmployee = {
      $key : null,
      name : '',
      position : '',
      office : '',
      salary : 0
    }
  }

  onDelete(form: NgForm){
    //define success modal using dialog factory
    if(!AlertifyJS.showDelete){
      AlertifyJS.dialog('showDelete', function factory(){
        return {
          /* buttons collection */
          buttons:[{
            className: (  AlertifyJS.defaults.transition = "slide",
                          AlertifyJS.defaults.theme.ok = "btn btn-primary",
                          AlertifyJS.defaults.theme.cancel = "btn btn-danger",
                          AlertifyJS.defaults.theme.input = "form-control"
                        ),
          }],

          build: function (){
            var html = '<i class="fa fa-trash fa-2x" style="vertical-align: middle; color: #a94442; margin-right: 20px"></i>';
            html += 'Delete';
            this.setHeader(html);
          }
        };
      }, false, 'confirm');
    }

    // Working Code
    let self = this;

    AlertifyJS.showDelete('Are you sure to delete this record?').setting({
        'labels': {
          ok: 'Yes',
          cancel: 'No'
        },
        'reverseButtons': false,
        'defaultFocus': 'cancel',
        'onok': function(){
          self.employeeService.deleteEmployee(form.value.$key);
          self.resetForm(form);
          AlertifyJS.success('Record deleted successfully!');
        },
        'oncancel': function(){
          AlertifyJS.error('Cancel the operation.');
        }
      });
    // Working Code  

    //System confirm dialog box
    // if(confirm('Are you sure to delete this record?')== true){
    //   this.employeeService.deleteEmployee(form.value.$key);
    //   this.resetForm(form);
    // }
  }
}
