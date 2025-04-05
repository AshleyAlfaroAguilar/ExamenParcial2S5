import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../auth/error-dialog/error-dialog.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dogs = [
    {
      name: 'Shiba Inu',
      image: 'assets/images/img1.jpg',
      description: 'Único y adorable, originario de Japón, tan solo 3 meses de edad, emocionado porque TÚ lo adoptes'
    },
    {
      name: 'Golden Retriever',
      image: 'assets/images/img2.jpg',
      description: 'Hermoso y jugueton, fiel compañero de aventuras, 1 año de edad, listo para que lo lleves a casa '
    },
    {
      name: 'Toby',
      image: 'assets/images/img3.jpg',
      description: 'Chihuahua, es mansito, nos lo encontramos en la calle, buen tipo, se baña'
    },{
      name: 'Princesa',
      image: 'assets/images/img4.jpg',
      description: 'La vecina pensó que era de nosotros y se la jaló, no se baña pero es juguetona'
    },{
      name: 'Tammy',
      image: 'assets/images/img5.jpg',
      description: 'Vino de la costa, no sabemos que raza es pero parece Pug, le gusta morder cosas, es juguetona'
    },{
      name: 'Luna',
      image: 'assets/images/img6.jpg',
      description: 'Tiene apego ansioso, la autora de la APP piensa en adoptarla '
    },{
      name: 'Negro',
      image: 'assets/images/img7.jpg',
      description: 'Lo que tiene de chiquito lo tiene de rabioso, muy jugueton y amoroso, pero si te volteas te pellizca la pierna'
    },{
      name: 'Mishi',
      image: 'assets/images/img8.jpg',
      description: 'No es un perro pero pareciera, esta embarazada, estamos dando a sus hijo en adopcion'
    },{
      name: 'Luna',
      image: 'assets/images/img9.jpg',
      description: ' Más preciosa que el mismo cielo '
    },{
      name: 'Cuchicuchi',
      image: 'assets/images/img10.jpg',
      description: 'En sus ojos se siente el odio que nos tiene, muerde pero solo cuando lo apretamos mucho'
    },{
      name: 'Corgi',
      image: 'assets/images/img11.jpg',
      description: 'Perro de la realeza, cualquiera amaria tenerlo'
    },{
      name: 'Orejas',
      image: 'assets/images/img12.jpg',
      description: 'Es bizco pero no le quita lo lindo, listo  para qeu lo lleves contigo a casa '
    },
    {
      name: 'Pato',
      image: 'assets/images/img13.jpg',
      description: 'Cabe en la palma de tu mano, mas pequeño que un chihuahua, amoroso y fiel compañero'
    }

    
  
  ];

  constructor(private dialog: MatDialog) {}

  
  onLike(dogName: string): void {
    
    console.log(`El usuario le ha dado like a ${dogName}`);
    
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      data: {
        title: '¡Like!',
        message: `El usuario le ha dado like a: ${dogName}`
      }
    });
  }

  onShare(dogName: string): void {
    console.log(`El usuario está interesado en adoptar a: ${dogName}`);
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      data: {
        title: '¡Interesado en Adopción!',
        message: `El usuario está interesado en adoptar a: ${dogName}`
      }
    });
  }
  
}
