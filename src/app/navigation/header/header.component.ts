import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

}
