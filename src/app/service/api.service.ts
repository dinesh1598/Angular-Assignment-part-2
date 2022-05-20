import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}
  fetchedData: any;
  url = 'http://localhost:3000/products';


  postProducts(data: any) {
    return this.http.post<any>('http://localhost:3000/products', data);
  }

  updateProducts(data: any, id: any) {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }

  getProducts() {
    return this.http.get<any>('http://localhost:3000/products');
  }

  getSingleProducts(id: any) {
    return this.http.get<any>('http://localhost:3000/products', id);
  }

  deleteProduct(id: any) {
    return this.http.delete<any>('http://localhost:3000/products/' + id);
  }

  getProductById(id: any) {
    return this.http.get<any>('http://localhost:3000/products/' + id);
  }

  //login api call
  isUserLoggedIn: boolean = false;
  isloggedIn(user_email: any, user_password: any) {
    this.http.get<any>('http://localhost:3000/login ').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === user_email && a.password === user_password;
        });
        if (user) {
          // alert("login success")
          this.isUserLoggedIn = true;
          console.log('Inside service :', this.isUserLoggedIn);
          this.router.navigate(['welcomescreen']);
        } else {
          Swal.fire({
            title: 'User Not Found...!',
            width: '500px',
          });
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!!!...!',
        });
      }
    );
  }

  activateRoutes() {
    return this.isUserLoggedIn;
  }
}
