import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'dark-mode';
  @ViewChild('drawer') drawer!: MatDrawer;
  links = [{
    label: 'Home',
    url: '/dashboard',
    isActive: true
  }, {
    label: 'About',
    url: '/about',
    isActive: false
  }];

  constructor(private overlay: OverlayContainer, private router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => {
      event = event as NavigationEnd;
      this.navigate(event.url !== '/' ? event.url : '/dashboard');
      this.toggleSideNav();
    })
  }

  ngOnInit(): void {
    window.addEventListener('toggleSideNav', () => this.toggleSideNav());
  }

  toggleSideNav(): void {
    this.drawer.toggle();
  }
  

  toggleThemeMode(darkMode: boolean): void {
    this.className = darkMode ? 'dark-mode' : '';
    if (darkMode) {
      this.overlay.getContainerElement().classList.add('dark-mode');
    } else {
      this.overlay.getContainerElement().classList.remove('dark-mode');
    }
  }

  navigate(url: string) {
    this.links.forEach(link => {
      link.isActive = url === link.url
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('toggleSideNav', () => this.toggleSideNav());
  }

}
