import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();


  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

}