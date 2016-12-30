import { Component,OnInit,Input } from '@angular/core';
import {Battery} from './battery';

@Component({
	selector:'battery-details',
	templateUrl: 'src/templates/battery-details.template.html',
})

export class BatteryDetailsComponent {
	@Input() battery:Battery;
}
