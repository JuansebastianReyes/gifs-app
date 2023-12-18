import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;


  constructor() { }

  ngOnInit() {
    if(!this.gif) throw new Error('Gif property is required');
  }
}
