import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TrainingSchedule } from '../models/training-schedule-modal';

@Injectable({
  providedIn: 'root'
})
export class TrainingScheduleService {

  private apiUrl = `${environment.apiUrl}/training-schedule`;

  constructor(private http: HttpClient) { }

  getAllTrainingSchedule(): Observable<TrainingSchedule[]> {
    return this.http.get<TrainingSchedule[]>(this.apiUrl);
  }

  createTrainingSchedule(trainingSchedule: TrainingSchedule): Observable<TrainingSchedule> {
    return this.http.post<TrainingSchedule>(this.apiUrl, trainingSchedule);
  }

  // getClubByCode(code: string): Observable<any> {
  //   if (code === '') {
  //     return new Observable();
  //   }
  //   const url = `${this.apiUrl}/findByCode/${code}`;
  //   return this.http.get<any>(url);
  // }

}
