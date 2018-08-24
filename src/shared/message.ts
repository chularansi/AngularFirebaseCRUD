import * as AlertifyJS from 'alertifyjs';

export class Message {
    constructor() { }

    msgDelete(msgSuccess: string, msgCancel?: string){
        //define success modal using dialog factory
        if(!AlertifyJS.showDelete){
            AlertifyJS.dialog('showDelete', function factory(){
                    return {
                        build: function (){
                            var html = '<i class="fa fa-trash fa-2x" style="vertical-align: middle; color: #a94442; margin-right: 20px"></i>';
                            html += 'Delete';
                            this.setHeader(html);
                        }
                    };
                }, 
                false, 'confirm');
        }

        AlertifyJS.showDelete('Are you sure to delete this record?').setting({
            'labels': {
              ok: 'Yes',
              cancel: 'No'
            },
            'reverseButtons': false,
            'defaultFocus': 'cancel',
            'onok': function(){
            //   self.employeeService.deleteEmployee(form.value.$key);
            //   self.resetForm(form);
              AlertifyJS.success(msgSuccess);
            },
            'oncancel': function(){
              AlertifyJS.error(msgCancel);
            }
          });
    }
}


//#3c763d
  //define failure modal using dialog factory
//   if(!AlertifyJS.showFailure){
//     AlertifyJS.dialog('showFailure', function factory(){
//       return {
//         build: function (){
//           var html = '<i class="fa fa-times-circle fa-2x" style="vertical-align: middle; color: #a94442; margin-right: 20px""></i>';
//           html += 'Hi Error';
//           this.setHeader(html);
//         }
//       };
//     }, false, 'alert');
//   }

    //let self = this;

    // AlertifyJS.confirm('Confirm Title', 'Confirm Message', 
    //   function(){
    //     self.employeeService.deleteEmployee(form.value.$key);
    //     self.resetForm(form);
    //     AlertifyJS.success('Record deleted successfully!');
    //   },
    //   function(){
    //     AlertifyJS.error('Cancel the operation.');
    // });

    //this.notifier.confirm('alertify is working');
    // var alert = AlertifyJS.alert('alert is clicked');
    // alert.set('label', 'Got It');
    // alert.set('onok', function () {
    //   AlertifyJS.success('you clicked got it');
    // });
    // alert.show();

    // AlertifyJS.confirm('alertify is working').setting({
    //   'labels': {
    //     ok: 'Yes',
    //     cancel: 'No'
    //   },
    //   'reverseButtons': true,
    //   'onok': function(){
    //     AlertifyJS.success('you clicked yes.');
    //   },
    //   'oncancel': function(){
    //     AlertifyJS.error('you clicked no.');
    //   }
    // });
    //alertify.confirm('alertify is working');


    //define failure modal using dialog factory
    // if(!AlertifyJS.showFailure){
    //   AlertifyJS.dialog('showFailure', function factory(){
    //     return {
    //       build: function (){
    //         var html = '<i class="fa fa-times-circle fa-2x" style="vertical-align: middle; color: #a94442; margin-right: 20px""></i>';
    //         html += 'Hi Error';
    //         this.setHeader(html);
    //       }
    //     };
    //   }, false, 'alert');
    // }