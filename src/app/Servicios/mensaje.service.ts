import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as JsonConfig from '../../assets/configdatabase.json';
import { messaje } from '../Interfaces/messaje_interface';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar) { }
  
  
  public saveMessage(messaje:messaje) 
  {
    let url = JsonConfig.url;
    this.http.post(`${url}insertMessaje.php`,JSON.stringify(messaje)).subscribe(result=>{
      console.log(result);
      
      if(result["result"] =="Ok")
      this.openSnackBar("Mensaje enviado correctamente","close");
      else this.openSnackBar("Mensaje no enviado", "close");
    });
    console.log(JsonConfig);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,
      {
        duration: 2000,
      })
  }
}
