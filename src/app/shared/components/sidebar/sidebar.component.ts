import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _giftServices: GifsService) { }

  ngOnInit() {
  }

  get tags(){
    return this._giftServices.tagsHistory;
  }

  searchTag(tag:string){
    this._giftServices.searchTag(tag);
  }
}
