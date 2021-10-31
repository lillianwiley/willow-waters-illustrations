import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  events: string[] = [];
  opened = false;

  //Create output property and initialize with event emitter.
  @Output() public sidenavToggle = new EventEmitter()
  

  constructor() {
   }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    //this triggers(emit) the event.
    this.sidenavToggle.emit();
  }

}
