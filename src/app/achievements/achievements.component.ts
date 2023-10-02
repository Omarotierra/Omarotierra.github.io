import { Component, OnInit } from '@angular/core';
import {  AchievementsService } from '../services/achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor(private achievementsService: AchievementsService) { }

  logros: any[] = [];

  ngOnInit(): void {
    this.achievementsService.getAchievements().subscribe((data: any) => {
      console.log(data);
      alert(data);
      this.logros = data.achievements;
    }
    );
  }

}