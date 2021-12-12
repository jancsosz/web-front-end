import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarRegistryService} from '../../../services/car-registry.service';
import {CarDTO} from '../../../models/dto/CarDTO';

@Component({
  selector: 'app-update-car-dialog',
  templateUrl: './update-car-dialog.component.html',
  styleUrls: ['./update-car-dialog.component.scss']
})
export class UpdateCarDialogComponent implements OnInit {

  updateCarForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UpdateCarDialogComponent>,
    private carRegistryService: CarRegistryService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public update(): void {
    this.carRegistryService.updateCarPUT(this.createCarDTO())
      .then(result => {
        this.dialogRef.close(result);
      });
  }

  private createForm(): void {
    this.updateCarForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      type: [this.data.type, Validators.required],
      numPlate: [this.data.numPlate, Validators.required],
      ownerName: [this.data.ownerName, Validators.required],
      weight: [this.data.weight, Validators.required]
    });
  }

  private createCarDTO(): CarDTO {
    return {
      name: this.updateCarForm.get('name').value,
      type: this.updateCarForm.get('type').value,
      numPlate: this.updateCarForm.get('numPlate').value,
      ownerName: window.localStorage.getItem('username'),
      weight: this.updateCarForm.get('weight').value
    };
  }
}
