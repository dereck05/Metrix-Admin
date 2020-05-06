import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  ide: any;
  nombre: string;
  descripcion: string;
  imagen: string;
  activo: any;
  eliminar: any;
}

function createNewData(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    ide: id,
    nombre: name,
    descripcion: 'Aqui va la descripcion',
    imagen: 'la imagen',
    activo: true,
    eliminar: false,
  };
}
const NAMES: string[] = [
  // tslint:disable-next-line:max-line-length
  'Nissan', 'Tigo', 'Movistar', 'Claro', 'Garnier', 'Presidencia', 'Glovo', 'Uber', 'Mcdonalds', 'Grupo Q', 'Toyota', 'Lawrence Company', 'Didi'
];


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'imagen', 'activo', 'eliminar'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  addForm: any;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewData(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.addForm = new FormGroup({
      // form controls
      // arg1 - intial state/value of this control
      // arg2 - single validator or an array of validators
      // arg3 - async validators
      ide: new FormControl(null),
      nombre: new FormControl(null),
      descripcion: new FormControl(null),
      imagen: new FormControl(null),
      activo: new FormControl(null),
      eliminar: new FormControl(null),
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  exit() {
    window.location.reload();
  }
/*  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.core.update(index,field,control.value);
    }

  }

  getControl(index, fieldName) {
    const a  = this.controls.at(index).get(fieldName) as FormControl;
    return this.controls.at(index).get(fieldName) as FormControl;
  }*/
}
