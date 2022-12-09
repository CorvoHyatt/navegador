import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-navegator',
  templateUrl: './navegator.component.html',
  styleUrls: ['./navegator.component.css']
})
export class NavegatorComponent implements OnInit {
    busqueda: string = ''
    tokens: string[] = []

    constructor(private http: HttpClient, private service: GitHubService){}
    ngOnInit(){
        this.busqueda = "https://example.com/"
    }

    

    search(): void{
        // this.tokens = this.busqueda.split(/:\/\//g).filter(Boolean)
        // console.log(`Tokens de busqueda: ${this.tokens}`);
        this.service.getRepos(this.busqueda).subscribe((res) =>{
            console.log("Respuesta: ",res);
        }, err => console.log("Error: ",err))
    }
}
