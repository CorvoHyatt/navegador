import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegator',
  templateUrl: './navegator.component.html',
  styleUrls: ['./navegator.component.css']
})
export class NavegatorComponent implements OnInit {
    busqueda: string = ''

    ngOnInit(){
        this.busqueda = 'http://localhost:3000'
    }

    search(): void{
        console.log(`Cadena de busqueda: ${this.busqueda}`);
    }
}
