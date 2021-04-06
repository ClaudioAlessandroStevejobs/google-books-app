import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  name: string = "Roberta";
  surname: string = "Corallo";
  email: string = "roxycrl92@gmail.com";
  nationality: string = "Italiana";
  public items = [
    { 
      img: "https://shopping.riza.it/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/s/o/socksoushmindecuregi_2.jpg",    
      title: "I miracolosi rimedi della nonna",
      author: "Riza",
    },
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLOgS1tPK1ZvwtKAnO5F5n1AmF_sdrLkigkDKYjsnsLtOhQjVnWRf7xnYAg&usqp=CAc",    
      title: "Le Indagini del Sergente MacRae",
      author: "Stuart McBride",
    },
    { 
      img: "https://shopping.riza.it/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/s/o/socksoushmindecuregi_2.jpg",    
      title: "I miracolosi rimedi della nonna",
      author: "Riza",
    },
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLOgS1tPK1ZvwtKAnO5F5n1AmF_sdrLkigkDKYjsnsLtOhQjVnWRf7xnYAg&usqp=CAc",    
      title: "Le Indagini del Sergente MacRae",
      author: "Stuart McBride",
    },
    { 
      img: "https://shopping.riza.it/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/s/o/socksoushmindecuregi_2.jpg",    
      title: "I miracolosi rimedi della nonna",
      author: "Riza",
    },
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLOgS1tPK1ZvwtKAnO5F5n1AmF_sdrLkigkDKYjsnsLtOhQjVnWRf7xnYAg&usqp=CAc",    
      title: "Le Indagini del Sergente MacRae",
      author: "Stuart McBride",
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    if (!localStorage.getItem('role')) {
      this.router.navigate(['logged-out']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
