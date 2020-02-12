import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { MensajeService } from 'src/app/Servicios/mensaje.service';
import { messaje } from '../../Interfaces/messaje_interface';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
///#region
formMensaje:FormGroup;

//#endregion

  constructor(fb:FormBuilder,private servicioMessaje:MensajeService)
  {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let cedulaRegex: RegExp = /^[0-9]+$/;

    this.formMensaje = fb.group({
      'Nombre': [null, [Validators.required,this.validationStringSpace]],
      'Apellido': [null, [Validators.required,this.validationStringSpace]],
      // 'Cedula': [null, Validators.compose([Validators.required, Validators.minLength(10),this.validationStringSpace, Validators.pattern(cedulaRegex)])],
       'Mensaje': [null, [Validators.required,this.validationStringSpace]],
      // 'pass': [null, [Validators.required, this.validationStringSpace]],
      'Email': [null, Validators.pattern(emailregex)],
      'Telefono': [null,Validators.compose([ Validators.required,Validators.pattern(cedulaRegex)])],

      // 'fecha': [null, [Validators.required,this.validationStringSpace]],
      // 'obser': [null],
      // 'admin': [false]
    });

  }
  @ViewChild('nav',{static:false}) nav: ElementRef;
  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])

  // onWindowScroll(e) {
  //     let element = document.querySelector('.navbar');
  //     if (window.pageYOffset > element.clientHeight) {
  //       element.classList.add('bgDarkTransition');
  //     } else {
  //       element.classList.remove('bgDarkTransition');
  //     }
  //   }

//#region Validaciones personalizadas
validationStringSpace(control: AbstractControl):{[key:string]:boolean} {
  let valor = control.value ;
 if (valor == null || valor.trim() == "")
   {
    return {ValidationErrors:true};
   } 
  else return null;
}
//#endregion
fecha:Date=new Date();
sendMessage(formData)
{
  
  let fechaNow = this.fecha.toLocaleDateString();
   let messaje:messaje;
   messaje={
     nombre :this.formMensaje.controls["Nombre"].value,
     apellido : this.formMensaje.controls["Apellido"].value,
     email : this.formMensaje.controls["Email"].value,
     telefono : this.formMensaje.controls["Telefono"].value,
     descripcion : this.formMensaje.controls["Mensaje"].value,
     fecha: fechaNow
   }
   console.log(messaje);
   
  //  messaje.nombre = this.formMensaje.controls["Nombre"].value;
   this.servicioMessaje.saveMessage(messaje);
}
}
