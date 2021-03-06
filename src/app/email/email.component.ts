import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  emailForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({

    });
  }

  login(email: string, password: string) {
    this.authService.signIn(email, password);
    this.authService.userID();
  }
}
