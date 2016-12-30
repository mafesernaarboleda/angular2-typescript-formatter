import {Component,OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BatteryService} from '../services/battery.service';
import {Battery} from './battery';

@Component({
	selector:'battery',
	templateUrl:'src/templates/battery.template.html',
	providers: [BatteryService]
})


export class BatteryComponent implements OnInit {

	batteryDetails:Battery;
	errorMessage:string;
	batteries:Battery[];
	mode ='Observable';

	constructor(
		private batteryService: BatteryService) { }

	onSelect(cdBattery:number): void {
		this.getBatteryDetails(cdBattery);
	}

	ngOnInit() {this.getBatteries();}

	getBatteries() {
		this.batteryService.getBatteries()
			.subscribe(
			batteries => this.batteries = batteries,
			error => this.errorMessage = <any>error);
	}

	getBatteryDetails(cdBattery: number) {
		this.batteryService.getBatteryDetails(cdBattery)
			.subscribe(
			batteryDetails => this.batteryDetails = batteryDetails,
			error => this.errorMessage = <any>error);
	}
}
