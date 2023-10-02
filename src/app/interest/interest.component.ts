import { Component, OnInit } from '@angular/core';
import {  InterestService } from '../services/interest.service';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit{

  constructor(private interestService: InterestService) { }

  intereses: any[] = [];

  ngOnInit(): void {
    this.interestService.getInterest().subscribe((data: any) => {
      console.log(data);
      alert(data);
      this.intereses= data.interest;
    }
    );
  }
}
