import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.less']
})
export class ImageTextComponent implements OnInit {

  @Input() url?: string
  @Input() headline: string = ""
  @Input() content: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
