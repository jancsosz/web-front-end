import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CarDTO} from '../../models/dto/CarDTO';
import {CarRegistryService} from '../../services/car-registry.service';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCarDialogComponent} from '../dialog/update-car-dialog/update-car-dialog.component';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {

  ownCars: MatTableDataSource<CarDTO> = new MatTableDataSource<CarDTO>();
  displayedColumns: string[] = ['name', 'type', 'ownerName', 'numPlate', 'weight', 'actions'];

  constructor(
    private carRegistryService: CarRegistryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMyCars();
  }

  public getMyCars(): void {
    this.carRegistryService.getOwnCars(window.localStorage.getItem('username'), window.localStorage.getItem('token'))
      .then(result => {
        this.ownCars = new MatTableDataSource(result);
      });
  }

  public deleteCar(numPlate: string): void {
    this.carRegistryService.deleteCarByNumPlateDELETE(numPlate, window.localStorage.getItem('token'))
      .then(() => {
        this.getMyCars();
        // this.deleteCarFromDataSource(numPlate);
      });
  }

  public openEditCarDialog(car: CarDTO): void {
    this.dialog.open(UpdateCarDialogComponent, {data: car, width: '400px'})
      .afterClosed().subscribe(
        result => {
          if (result) {
            this.refreshTableDataSource(result);
          }
        }
    );
  }

  private refreshTableDataSource(carDTO: CarDTO): void {
    for (let i = 0; i < this.ownCars.data.length; i++) {
      if (this.ownCars.data[i].numPlate === carDTO.numPlate) {
        this.ownCars.data[i] = carDTO;
        this.ownCars = new MatTableDataSource<CarDTO>(this.ownCars.data);
      }
    }
  }

  /*private deleteCarFromDataSource(numPlate: string): void {

    for (let i = 0; i < this.ownCars.data.length; i++) {
      if (this.ownCars.data[i].numPlate === numPlate) {
        const tmpList = this.ownCars.data.splice(i - 1, 1);
        console.log(tmpList);
        this.ownCars = new MatTableDataSource<CarDTO>(tmpList);
      }
    }
  }*/

}
