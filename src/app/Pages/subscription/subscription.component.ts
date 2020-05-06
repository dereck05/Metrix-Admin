import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormControl, FormGroup} from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SuscriptionAddComponent} from '../../Components/suscription-add/suscription-add.component';


// tslint:disable-next-line:class-name
export interface clients {
  id: any;
  nombre: string;
}
function createNewData(ide: number): clients {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  return {
    id: ide,
    nombre: name,
  };
}
const NAMES: string[] = [
  // tslint:disable-next-line:max-line-length
  'Nissan', 'Tigo', 'Movistar', 'Claro', 'Garnier', 'Presidencia', 'Glovo', 'Uber', 'Mcdonalds', 'Grupo Q', 'Toyota', 'Lawrence Company', 'Didi'
];

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plusIcon = faPlus;
  eyeIcon = faEye;
  displayedColumns: string[] = ['nombre', 'actions'];
  dataSource: MatTableDataSource<clients>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  addForm: any;
  constructor(public dialog: MatDialog) {
    const users = Array.from({length: 100}, (_, k) => createNewData(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }
  openAddSuscription(): void {
    this.dialog.open(SuscriptionAddComponent, {
      width: '75%',
      height: '85%',
      disableClose: true
      /*data: {name: this.name, animal: this.animal}*/
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.addForm = new FormGroup({
      nombre: new FormControl(null),
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
