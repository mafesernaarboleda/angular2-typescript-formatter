export class Battery {
	cdBattery:number;
	dsBrand:string;
	dsAmperage:string;
	dsVoltage:string;
	dsCapacity:string;
	dsDiameter:string;
	dsHeight:string;
	dsWeight:string;
	dsCrankingAmps:string;

	constructor(cdBattery, dsBrand, dsAmperage, dsVoltage, dsCapacity,
		dsDiameter, dsHeight, dsWeight, dsCrankingAmps) {
		this.cdBattery = cdBattery;
		this.dsBrand = dsBrand;
		this.dsAmperage = dsAmperage;
		this.dsVoltage = dsVoltage;
		this.dsCapacity = dsCapacity;
		this.dsDiameter = dsDiameter;
		this.dsHeight = dsHeight;
		this.dsWeight = dsWeight;
		this.dsCrankingAmps = dsCrankingAmps;
	}
}
