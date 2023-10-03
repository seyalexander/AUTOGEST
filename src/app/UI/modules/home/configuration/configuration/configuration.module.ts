import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationPageComponent } from './components/configuration-page/configuration-page.component';



@NgModule({
    imports: [
    CommonModule,
    ConfigurationRoutingModule,
    ConfigurationPageComponent
]
})
export class ConfigurationModule { }
