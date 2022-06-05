import { Component, OnInit  } from '@angular/core';
import { Rotina } from '../shared/rotina';
import { RotinaService } from '../shared/rotina.service';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private rotService: RotinaService, ) {}

  ngOnInit(){  }


}
