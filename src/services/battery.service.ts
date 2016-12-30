import { Injectable} from '@angular/core';
import { Http,Response} from '@angular/http';
import { Headers,RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Battery} from '../components/battery';

@Injectable()
export class BatteryService {

	private url: string = 'http://localhost:8080/batteries911/battery';

	constructor(private http:Http) {
	}

	getBatteries(): Observable<Battery[]> {
		return this.http.get(this.url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getBatteryDetails(cdBattery: number): Observable<Battery> {
		let bodyPost = JSON.stringify({ "cdBattery": cdBattery });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers, method: "post" });
		return this.http.post(`${this.url}/getById`, bodyPost, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};
	}

	private handleError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}
