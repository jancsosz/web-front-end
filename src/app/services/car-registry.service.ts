import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CarDTO} from '../models/dto/CarDTO';

@Injectable({
  providedIn: 'root'
})
export class CarRegistryService extends BaseService {

  private carUrl = '/cars';
  private allUrl = '/all';
  private ownUrl = '/getOwnCars';
  private registerUrl = '/register';
  private updateUrl = '/updateCar';

  constructor(http: HttpClient) {
    super(http);
  }

  public async registerCar(carDTO: CarDTO, token: string): Promise<any> {

    const url = `${this.carUrl}${this.registerUrl}`;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const options = {
      // headers,
      body: carDTO,
      responseType: 'json' as const
    };
    return (await this.restCall('POST', url, options));
  }

  public async getAllRegisteredCars(token: string): Promise<CarDTO[]> {
    const url = `${this.carUrl}${this.allUrl}`;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const options = {
      // headers,
      responseType: 'json' as const
    };

    return (await this.restCall('GET', url, options));
  }

  public async getOwnCars(ownerName: string, token: string): Promise<CarDTO[]> {
    const url = `${this.carUrl}${this.ownUrl}`;

    const options = {
      params: {ownerName},
      responseType: 'json' as const
    };

    return (await this.restCall('GET', url, options));
  }

  public async deleteCarByNumPlateDELETE(numPlate: string, token: string): Promise<string> {
    const url = `${this.carUrl}/${numPlate}`;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const options = {
      // headers,
      responseType: 'text' as const
    };

    return (await this.restCall('DELETE', url, options));
  }

  public async updateCarPUT(carDTO: CarDTO): Promise<CarDTO> {
    const url = `${this.carUrl}${this.updateUrl}`;

    const options = {
      body: carDTO,
      responseType: 'json' as const
    };

    return (await this.restCall('PUT', url, options));
  }
}
