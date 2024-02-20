import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado! : Item;

  valorItem! : string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes ['itemQueVaiSerEditado'].firstChange){
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }
}