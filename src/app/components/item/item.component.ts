import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();

  @Output() emitindoIdParaDeletar =  new EventEmitter();


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

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  deletarItem(){
    console.log('Estão tentando destruir!')
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy(){
    console.log('Componente foi destruído!')
  }

}
