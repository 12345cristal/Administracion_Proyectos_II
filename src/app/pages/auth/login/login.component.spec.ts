import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../core/services/auth';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: any;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['login', 'setToken']);
    
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: authService }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login and set token on success', () => {
    authService.login.and.returnValue(of({ access_token: '123' }));
    component.correo = 'test@test.com';
    component.contrasena = '123456';
    component.login();
    expect(authService.login).toHaveBeenCalledWith('test@test.com', '123456');
    expect(authService.setToken).toHaveBeenCalledWith('123');
  });

  it('should alert on login error', () => {
    spyOn(window, 'alert');
    authService.login.and.returnValue(throwError(() => new Error('Login failed')));
    component.correo = 'test@test.com';
    component.contrasena = 'wrongpass';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Correo o contraseña incorrectos');
  });
});
