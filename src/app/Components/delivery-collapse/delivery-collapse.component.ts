import {Component, Input, OnInit} from '@angular/core';
import {Entrega} from '../../Interfaces/Entrega';


@Component({
  selector: 'app-delivery-collapse',
  templateUrl: './delivery-collapse.component.html',
  styleUrls: ['./delivery-collapse.component.css']
})


export class DeliveryCollapseComponent implements OnInit {

  @Input('entrega') entrega: Entrega;

  time = {hour: 10, minute: 30};
  meridian = true;

  constructor() { }

  ngOnInit(): void {
  }

}
