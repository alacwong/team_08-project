import { Component, OnInit, HostListener, Type } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'client-server';
  faUserCircle = faUserCircle;
  userRole: any;

  constructor(public auth: AuthService, private loginService: LoginService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    var el = document.getElementById('footer-main-links');
    if (window.innerWidth < 850) {
      el.classList.remove('row');
    } else {
      el.classList.add('row');
    }
  }

  ngOnInit(): void {
    this.userRole = this.loginService
      .getUserRole(this.auth.userProfile$.source)
      .subscribe((data) => {
        this.userRole = data;
        console.log(data);
      });
  }

  upgradeUser(): void {
    this.loginService.updateUser(this.auth.userProfile$.source);
  }
}
