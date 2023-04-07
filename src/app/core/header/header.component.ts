import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  modeToggleControl = new FormControl(true);
  @Output() modeEvent = new EventEmitter();

  ngOnInit(): void {
    this.modeToggleControl.valueChanges.subscribe((darkMode) => {
      this.modeEvent.emit(darkMode);
    });
  }

  toggleSideNav() {
    window.dispatchEvent(new Event('toggleSideNav'))
  }
}
