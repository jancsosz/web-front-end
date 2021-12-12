import { Component, OnInit } from '@angular/core';
import {CarRegistryService} from '../../services/car-registry.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CarDTO} from '../../models/dto/CarDTO';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.scss']
})
export class RegisterCarComponent implements OnInit {

  registeredCar: CarDTO;
  registerCarForm: FormGroup;

  constructor(
    private carRegistryService: CarRegistryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public register(): void {
    this.carRegistryService.registerCar(this.createCarDTO(), window.localStorage.getItem('token'))
      .then(result => {
        this.registeredCar = result.data;
      });
  }

  private createForm(): void {
    this.registerCarForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      type: [undefined, Validators.required],
      numPlate: [undefined, [Validators.required, Validators.pattern('[a-zA-Z]{3}-[0-9]{3}')]],
      ownerName: [undefined, Validators.required],
      weight: [undefined, Validators.required]
    });
  }

  private createCarDTO(): CarDTO {
    return {
      name: this.registerCarForm.get('name').value,
      type: this.registerCarForm.get('type').value,
      numPlate: this.registerCarForm.get('numPlate').value,
      ownerName: window.localStorage.getItem('username'),
      weight: this.registerCarForm.get('weight').value
    };
  }

}
