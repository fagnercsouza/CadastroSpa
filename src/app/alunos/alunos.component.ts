import { Component, Input, OnInit } from '@angular/core';
import { Alunos } from '../module/alunos.model';
import { Sort } from '@angular/material/sort'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  sourceAluno: Alunos[] = [
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
    {nome: "Nome", nota: 5, curso: "Java", email: 'email.com'},
  ]


  constructor() {
   }

  ngOnInit(): void {
    console.log(this.sourceAluno);
    

  }


  
}
