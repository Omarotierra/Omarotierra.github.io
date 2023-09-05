import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

nombre : string = "fake name";
titulo : string = "fake name";
objetivo : string = "fake name";
foto : string = "fake name";
email : string = "fake name";
celular : string = "fake name";
ubicacion : string = "fake name";
redsocial : string = "fake name";

  ngOnInit(): void {
    this.headerService.getHeader().subscribe((data: any) => {
      console.log(data);
      alert(data);
    }
    );
  }

}
