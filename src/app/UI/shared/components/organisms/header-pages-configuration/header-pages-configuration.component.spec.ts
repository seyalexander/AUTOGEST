import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPagesConfigurationComponent } from './header-pages-configuration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('HeaderPagesConfigurationComponent', () => {
  let component: HeaderPagesConfigurationComponent;
  let fixture: ComponentFixture<HeaderPagesConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPagesConfigurationComponent],
      imports: [RouterTestingModule, FormsModule],
    });
    fixture = TestBed.createComponent(HeaderPagesConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
