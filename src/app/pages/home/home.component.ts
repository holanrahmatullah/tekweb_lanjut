import { Component, OnInit } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getData();  
  }

  dataSource:any=[]

  getData()
  {
      this.dataSource=[
      {
          id : 1,
          name : 'Holan',
          address : 'Batam',
          jenisKelamin : 'Laki-laki'
        },
        { 
          id : 2,
          name : 'Rindu',
          address : 'Yogya',
          jenisKelamin : 'Perempuan'
        }
    ]
  }

}
