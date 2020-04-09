import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  addForm: any;

  constructor() { }

  ngOnInit(): void {


    this.addForm = new FormGroup({
      // form controls
      // arg1 - intial state/value of this control
      // arg2 - single validator or an array of validators
      // arg3 - async validators
      nombre: new FormControl(null),
      descripcion: new FormControl(null),
      imagen: new FormControl(null),
      activo: new FormControl(null)
    });
  }


  exit() {
    window.location.reload();
  }
}
