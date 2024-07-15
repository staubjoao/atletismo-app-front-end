import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userRole: 'COACH' | 'ATHLETE' | undefined;
  upcomingSessions: { date: string; description: string }[] = [];

  constructor() {}

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole') as 'COACH' | 'ATHLETE';
    this.userRole = 'ATHLETE';
    console.log('User role:', this.userRole);
  }

  // Coach methods
  addClub() {
    // Implement logic to add a club
  }

  addEvent() {
    // Implement logic to add an event
  }

  addTrainingSchedule() {
    // Implement logic to add a training schedule
  }

  viewAthletes() {
    // Implement logic to view athletes
  }

  // Athlete methods
  loadUpcomingSessions() {
    // Implement logic to load upcoming training sessions
  }

  logTrainingSession(session: any) {
    // Implement logic to log a training session
  }

  viewTrainingSchedule() {
    // Implement logic to view the full training schedule
  }
}
