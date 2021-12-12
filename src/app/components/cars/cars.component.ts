import { Component, OnInit } from '@angular/core';
import {CarRegistryService} from '../../services/car-registry.service';
import {CarDTO} from '../../models/dto/CarDTO';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  registeredCars: MatTableDataSource<CarDTO> = new MatTableDataSource<CarDTO>();

  constructor(
    private carRegistryService: CarRegistryService
  ) { }

  ngOnInit(): void {
    this.carRegistryService.getAllRegisteredCars(window.localStorage.getItem('token'))
      .then(result => {
        this.registeredCars = new MatTableDataSource(result);
      });
  }

}
