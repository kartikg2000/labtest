import { Component, OnInit } from '@angular/core';
import { ServicexService } from '../servicex.service'
 
@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent {
  dataItem:any = {} 
  title = 'SpaceX Mission Launch List ';

  constructor(private api:ServicexService)
  {
 
  }

  ngOnInit()
  {
    this.api.apiCall().subscribe(data=>{console.log(data);
    this.dataItem= data;
  });
  }
}
