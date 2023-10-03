import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationPageComponent } from './components/configuration-page/configuration-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';


@NgModule({
  declarations: [
    ConfigurationPageComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule
  ]
})
export class ConfigurationModule { }
