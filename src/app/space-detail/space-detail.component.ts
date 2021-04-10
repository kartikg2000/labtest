import { Component, OnInit } from '@angular/core';
import { ServicexService } from '../servicex.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.css']
})
export class SpaceDetailComponent implements OnInit {
  dataItem:any = {} 
  title = 'SpaceX Mission Details';
  constructor(private readonly route: ActivatedRoute,
    private readonly launchDetails: ServicexService) { }

  ngOnInit(): void {
    this.launchDetails.apiCall().subscribe(data=>{console.log(data);
      this.dataItem= data;
    });
  }

}
