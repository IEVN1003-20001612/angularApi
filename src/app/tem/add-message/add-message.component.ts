import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent implements OnInit {
  formgroup!:FormGroup;

  constructor(public messageService: MessageserviceService, private fb: FormBuilder){ }
  alumno:string=""

  ngOnInit(): void {
    this.formgroup=this.initForm();
  }
  initForm():FormGroup{
    return this.fb.group({
      nobre:['']
    })
  }

  addAlumno(){
    let {nombre}=this.formgroup.value;
    this.messageService.add(nombre)
    this.formgroup.get('nombre')?.setValue('')
  }

}
