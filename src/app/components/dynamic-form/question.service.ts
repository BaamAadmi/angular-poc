import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams, Response } from "@angular/http";
import { DropdownQuestion } from "./question-dropdown";
import { QuestionBase } from "./question-base";
import { TextboxQuestion } from "./question-textbox";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class QuestionService {
    constructor(private http: Http) { }
    private pricingApiUrl = "";  // this.myGlobals.pricingApiUrl;
    private extractData(res: Response) {
        const body = res.json();
        return body || [];
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getControls(clientId: string, language: string): any {
        // const endPoint = "CustomerDetailTransaction/GetControlList/" + clientId + "/" + language;
        // const headers = new Headers({ "Content-Type": "application/json" }); // ... Set content type to JSON
        // const options = new RequestOptions({ headers: headers }); // Create a request option
        // return this.http.get(endPoint, options) // ...using post request
        //     .map(this.extractData)
        //     .catch(this.handleError);

    }
}
