// import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormGroup } from '@angular/forms';
// import { DoctorModel } from './administrator.model';
// import { AdminService } from '../service/admin.service';


// @Component({
//   selector: 'app-administrator',
//   templateUrl: './administrator.component.html',
//   styleUrls: ['./administrator.component.css']
// })

// export class AdministratorComponent implements OnInit{
//   formValue!:FormGroup;
//   doctorModelObj:DoctorModel=new DoctorModel();
//   doctorData!:any;
//   showAdd!:boolean;
//   showUpdate!:boolean;

//   constructor(private formbuilder:FormBuilder,
//     private admin: AdminService  ){}
//   ngOnInit(): void {
//     this.formValue=this.formbuilder.group({
//       doctorId:[''],
//       doctorName:[''],
//       department:['']
//     })
//     this.getAllDoctorDetails();
    
//   }
//   clickAddDoctor(){
//     this.formValue.reset();
//     this.showAdd=true;
//     this.showUpdate=false;
//   }

//   postDoctorDetails() {
//     this.doctorModelObj.doctorId = this.formValue.value.doctorId;
//     this.doctorModelObj.doctorName = this.formValue.value.doctorName;
//     this.doctorModelObj.department = this.formValue.value.department;

//     this.admin.postDoctor(this.doctorModelObj)
//       .subscribe(
//         (res: any) => {
//           console.log(res);
//           alert("Doctor added successfully");
//           let ref=document.getElementById('cancel')
//           ref?.click();
//           this.formValue.reset();
//           this.getAllDoctorDetails();          
//         },
//         (err: any) => {
//           console.error(err);
//           alert("Something went wrong");
//         })
//   }


// getAllDoctorDetails() {
//   this.admin.getDoctor()
//   .subscribe(res=>{
//     this.doctorData=res;
//   })
// }


// // deleteDoctor(row : any){
// //   this.admin.deleteDoctor(row.doctorId)
// //   .subscribe(res=>{
// //     alert("Doctor data deleted");
// //     this.getAllDoctorDetails();
// //   })
  
// // }

//   deleteDoctor(row: any) {
//     this.admin.deleteDoctor(row.doctorId).subscribe(
//       (res) => {
//         alert('Doctor data deleted');
//         this.getAllDoctorDetails();
//       },
//       (error) => {
//         // Handle error appropriately
//         console.error('Error deleting doctor:', error);
//       }
//     );
//   }


// onEdit(row:any){
//   this.showAdd=false;
//   this.showUpdate=true;
//   this.doctorModelObj.doctorId=row.doctorId;
//   this.formValue.controls['doctorId'].setValue(row.doctorId)
//   this.formValue.controls['doctorName'].setValue(row.doctorName)
//   this.formValue.controls['department'].setValue(row.department)
// }
// updateDoctorDetails(){
//   this.doctorModelObj.doctorId = this.formValue.value.doctorId;
//     this.doctorModelObj.doctorName = this.formValue.value.doctorName;
//     this.doctorModelObj.department = this.formValue.value.department;
//     this.admin.updateDoctor(this.doctorModelObj,this.doctorModelObj.doctorId)
//     .subscribe(res=>{
//       alert("Update successfully")
//       let ref=document.getElementById('cancel')
//       ref?.click();
//       this.formValue.reset();
//       this.getAllDoctorDetails();
//     })
// }
  
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { DoctorModel } from './administrator.model';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  formValue!: FormGroup;
  doctorModelObj: DoctorModel = new DoctorModel();
  doctorData!:any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private admin: AdminService // Inject ApiService here
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      doctorId: [null],
      doctorName: [''],
      department: ['']
    });
    this.getAllDoctorDetails();
  }
  clickadddoctor(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postDoctorDetails() {
    this.doctorModelObj.doctorId = this.formValue.value.doctorId;
    this.doctorModelObj.doctorName = this.formValue.value.doctorName;
    this.doctorModelObj.department = this.formValue.value.department;

    this.admin.postDoctor(this.doctorModelObj)
      .subscribe(
        (res: any) => {
          console.log(res);
          alert("Doctor added successfully");
          let ref=document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getAllDoctorDetails();
        },
        (err: any) => {
          console.error(err);
          alert("Something went wrong");
        })
  }

  getAllDoctorDetails() {
    this.admin.getDoctor()
    .subscribe(res=>{
      this.doctorData=res;
    })
}

deleteDoctor(row : any){
  this.admin.deleteDoctor(row.id)
  .subscribe(res=>{
    alert("doctor data deleted");
    this.getAllDoctorDetails();
  })
  
}

onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.doctorModelObj.doctorId=row.doctorId;
  this.formValue.controls['doctorId'].setValue(row.doctorId)
  this.formValue.controls['doctorName'].setValue(row.doctorName)
  this.formValue.controls['department'].setValue(row.department)
}
updateDoctorDetails(){
  this.doctorModelObj.doctorId = this.formValue.value.doctorId;
  this.doctorModelObj.doctorName = this.formValue.value.doctorName;
  this.doctorModelObj.department = this.formValue.value.department;
  this.admin.updateDoctor(this.doctorModelObj,this.doctorModelObj.doctorId)
    .subscribe(res=>{
      alert("update successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDoctorDetails();
    })
}
}