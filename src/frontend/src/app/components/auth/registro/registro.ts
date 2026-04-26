import { Component } from '@angular/core';
import { Nivelinteres } from '../../../servicios/nivelinteres/nivelinteres';
import { Interes } from '../../../servicios/nivelinteres/Interes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  niveles: Interes[]=[];

  constructor(private nivelInteresServicio: Nivelinteres,private http: HttpClient, private router: Router){}

  ngOnInit(): void{
    this.nivelInteresServicio.obtenerListaDeNivelesDeInteres().subscribe(dato=>{
      this.niveles=dato;
    })
  }

  nombre:string='';
  apellido:string='';
  username:string='';
  password:string='';
  telefono:string='';
  interesId:string='';

  registro(){
    const usuario={
      nombre:this.nombre,
      apellido:this.apellido,
      telefono:this.telefono,
      interesId:{id:this.interesId},
      username:this.username,
      password:this.password
    };

    this.http.post('http://localhost:8080/auth/registro',usuario).subscribe({
      next:()=>{
        Swal.fire('Usuario registrado',`El usuario ha sido registrado correctamente`,'success');

        this.nombre='';
        this.apellido='';
        this.telefono='';
        this.interesId='';
        this.username='';
        this.password='';

        this.router.navigate(['/login']);
      },
      error: ()=>{
        alert('Error al registrar al usuario')
      }
    })
  }
}
