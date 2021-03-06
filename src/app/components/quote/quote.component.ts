import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.less']
})
export class QuoteComponent implements OnInit {

  @Input() quote: string = ""
  @Input() author: string = "Unbekannt"
  
  constructor() { }

  ngOnInit(): void {
  }

}
