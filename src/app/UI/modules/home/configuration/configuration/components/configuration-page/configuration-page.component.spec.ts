import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationPageComponent } from './configuration-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ConfigurationPageComponent', () => {
  let component: ConfigurationPageComponent;
  let fixture: ComponentFixture<ConfigurationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationPageComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(ConfigurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(routerOutlet).not.toBeNull(); // Verifica que se encuentre el RouterOutlet en la plantilla del componente
  });
});
