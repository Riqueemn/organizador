import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome:string;
  nomesArray = [];
  nomes;
    // nomes2 = ["Argentina", "EUA", "Itália", "Japão", "Austrália", "Brasil"];
  nomesOrganizados1;
  nomesOrganizados2;
  nomesImprimir = "";
  condicaoLimpar: boolean = false;

  constructor(public navCtrl: NavController) {

  }
  
  enviar(){
    
      // // this.nomes = this.nomesOrganizados.join("; ")
      // for (var i=0; nomesArray <= nomesArray.length; i++){
      //   this.nomesArray[i] = this.nome;
      // }

      //Incrementar conteúdos ao Array
      this.nomesArray.push(this.nome.toUpperCase());
   
      if (this.nomesArray.length == 1){
        this.nomesImprimir += this.nome.toUpperCase();
      }else{
        this.nomesImprimir += ", " + this.nome.toUpperCase();
      }

      //Zerar o input  
      this.nome = "";

      //Deixar o botão de limpar visível
      this.condicaoLimpar = true;
     
      console.log(this.nomesArray);  

  }
  
  //Organizar dados em ordem alfabética e com ";"
  organizar(){

    //Ordem alfabética
    this.nomesOrganizados1 = this.nomesArray.sort();

    //Com ";"
    this.nomesOrganizados2 = this.nomesOrganizados1.join("; ");
    console.log(this.nomesOrganizados2);
  }

  //Limpar valores
  limpar(){
    this.nomesImprimir = "";
    this.nomesArray = [];
    this.nomesOrganizados1 = null;
    this.nomesOrganizados2 = "";
    
    //Deixar o botão de limpar invisível
    this.condicaoLimpar = false;
  }

}