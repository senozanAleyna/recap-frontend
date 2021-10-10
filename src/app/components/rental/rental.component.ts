import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/dto/rentalDto';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:RentalDto[]=[];
  constructor(private rentalService:RentalService ) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{//senkron çalışma sağlar
      this.rentals=response.data //data eşleşmesi sağlanıyorsa subscribe edilir
    })
  }
}
