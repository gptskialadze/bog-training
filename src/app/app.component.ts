import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   ngOnInit(): void {
    //EvalError -  ჯავასკრიპში იყო ts  ში მოგვარებულია
    //RangeError - როდესაც მასივი იღებს -1 ინდექსს
    //ReferenceError - როდესაც ფუნქცია ან კლასი არ არსებობს და ცდილობ რეფერენსის გაკეთებას
    //SyntaxError  - არასწორი სინტაქსი, მაგალითად JSON ის გაპარსვა არასწორი ობიექტის
    //TypeError - თუ ობიექტს არ აქვს ფროფერთი და ცდილობ ამ არარსებულ ფროფერთის მიწვდე
    //URIError - ჯს ის მხარეს უფრო აქტუალურია
    this.typeError();
    this.syntaxError();
    this.rangeError();
   }

    typeError() {
    let obj: any = {};
    return obj.type.text
   }

    syntaxError() {
      let str: any = "{123}";
      return JSON.parse(str)    
   }

   rangeError() {
    var anArray = new Array(-1); 
    return anArray
   }
}
