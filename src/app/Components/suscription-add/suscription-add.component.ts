import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl, FormGroup} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';
import {Entrega} from '../../Interfaces/Entrega';
import {Pais} from '../../Interfaces/Pais';
import {Servicio} from '../../Interfaces/Servicio';
import {Fuente} from '../../Interfaces/Fuente';
import {Categoria} from '../../Interfaces/Categoria';


interface Model {
  title: string;
  description: string;
}


interface Dia {
  dia: string;
}

interface Hora {
  hora: string;
  minuto: string;
  sigla: string; // AM,PM,MD,MN
}
interface ZonaHoraria {
  numero: string;
}

@Component({
  selector: 'app-suscription-add',
  templateUrl: './suscription-add.component.html',
  styleUrls: ['./suscription-add.component.css']
})
export class SuscriptionAddComponent implements OnInit {



  secciones: Array<Model> = [];
  entregas: Array<Entrega> = [];

  /** control for the fuente MatSelect filter keyword multi-selection */
  public fuenteMultiCtrl: FormControl = new FormControl();

  /** control for the selected category for multi-selection */
  public categoryMultiCtrl: FormControl = new FormControl();

  public fuenteMultiFilterCtrl: FormControl = new FormControl();

  public categoryMultiFilterCtrl: FormControl = new FormControl();

  public filteredCategoriesMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public filteredSourceMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  paises: Pais[] = [
    {id: '1', pais: 'Costa Rica'},
    {id: '2', pais: 'Nicaragua'},
    {id: '3', pais: 'Honduras'},
    {id: '4', pais: 'El Salvador'},
    {id: '5', pais: 'Guatemala'},
    {id: '6', pais: 'República Dominicana'},
    {id: '7', pais: 'Belice'},
    {id: '8', pais: 'Estados Unidos'}
  ];
  servicios: Servicio[] = [
    {id: '1', servicio: 'Noticia'},
    {id: '2', servicio: 'Publicidad Exterior'},
    {id: '3', servicio: 'Publicidad'},
    {id: '4', servicio: 'Patrocinio'},
    {id: '5', servicio: 'Publicidad Digital'},
    {id: '6', servicio: 'Redes Sociales'}
  ];
  fuentes: Fuente[] = [
    {id: '1', fuente: 'Television'},
    {id: '2', fuente: 'Radio'},
    {id: '3', fuente: 'Prensa Escrita'},
    {id: '4', fuente: 'Revistas'},
    {id: '5', fuente: 'Internet'},
    {id: '6', fuente: 'Facebook'},
    {id: '7', fuente: 'Twitter'}
  ];
  categorias: Categoria[] = [
    {id: '1', categoria: 'Tecnologia'},
    {id: '2', categoria: 'Finanzas'},
    {id: '3', categoria: 'Belleza'},
    {id: '4', categoria: 'Estetica'},
    {id: '5', categoria: 'Gobierno'},
    {id: '6', categoria: 'Asamblea Legislativa'},
    {id: '7', categoria: 'Obra Publica'},
    {id: '8', categoria: 'Bienestar Social'},
    {id: '9', categoria: 'Banca'},
    {id: '10', categoria: 'Construccion'},
    {id: '11', categoria: 'Realidad Nacional'}
  ];
  dias: Dia[] = [
    {dia: 'Lunes'},
    {dia: 'Martes'},
    {dia: 'Miercoles'},
    {dia: 'Jueves'},
    {dia: 'Viernes'},
    {dia: 'Sabado'},
    {dia: 'Domingo'},
  ];

  constructor(public dialogRef: MatDialogRef<SuscriptionAddComponent>) {
  }

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  ngOnInit() {

    this.filteredCategoriesMulti.next(this.categorias.slice());
    this.filteredSourceMulti.next(this.fuentes.slice());
    // listen for search field value changes
    this.categoryMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCategories();
      });

    this.fuenteMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSource();
      });
  }


  private filterCategories() {
    if (!this.categorias) {
      return;
    }
    // get the search keyword
    let search = this.categoryMultiFilterCtrl.value;
    if (!search) {
      this.filteredCategoriesMulti.next(this.categorias.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCategoriesMulti.next(
      this.categorias.filter(cat => cat.categoria.toLowerCase().indexOf(search) > -1)
    );
  }
  private filterSource() {
    if (!this.fuentes) {
      return;
    }
    // get the search keyword
    let search = this.fuenteMultiFilterCtrl.value;
    if (!search) {
      this.filteredSourceMulti.next(this.fuentes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredSourceMulti.next(
      this.fuentes.filter(fue => fue.fuente.toLowerCase().indexOf(search) > -1)
    );
  }
  public addSeccion() {
// push object that you need to be added into array
    this.secciones.push({title: 'new title of item', description: 'desc'});
  }
  public addEntrega() {
    this.entregas.push({id: 'a', nombre: 'test'});
    console.log(this.entregas.length);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
