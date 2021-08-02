import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() menuItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnMenuClick(event: any): void {
    event.stopPropagation();
    this.menuItem.emit(event.target.innerText);
  }

}
