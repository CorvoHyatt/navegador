import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegator',
  templateUrl: './navegator.component.html',
  styleUrls: ['./navegator.component.css']
})
export class NavegatorComponent implements OnInit {
    busqueda: string = ''
    tokens: string[] = []

    ngOnInit(){
        this.busqueda = 'http://localhost:3000'
    }

    search(): void{
        this.tokens = this.busqueda.split(/:\/\//g).filter(Boolean)
        console.log(`Tokens de busqueda: ${this.tokens}`);
    }
}
