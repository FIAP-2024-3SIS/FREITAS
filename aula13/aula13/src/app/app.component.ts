import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula13';

  fiat = new carro("", "", "");
}

export class carro{
  constructor(
    cor: string,
    nome: string,
    placa: string
  ){
    this.cor = cor;
    this.nome = nome;
    this.placa = placa;
  }
public cor: string = "";
public nome: string = "";
public placa: string = "";

}

