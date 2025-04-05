import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../error-dialog/error-dialog.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone : false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (username === 'rgonzalez' && password === 'rgonzalez') {
      this.router.navigate(['/home']); 
    } else {
      this.openDialog('Error', 'Error al hacer login'); 
    }
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      data: { title, message }
    });
  }
}