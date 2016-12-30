import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BatteryComponent } from '../components/battery.component';
import { BatteryDetailsComponent } from '../components/batteries-details.component';
import { BatteryService } from '../services/battery.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [BrowserModule, HttpModule, FormsModule],
	declarations: [BatteryComponent, BatteryDetailsComponent],
	bootstrap: [BatteryComponent]

})
export class BatteryModule { }
