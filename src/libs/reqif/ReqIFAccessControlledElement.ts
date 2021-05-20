import {Identifiable} from "./ReqIFIdentifiable"

//----------------------
//Access restriction

//should be abstract class
export class AccessControlledElement extends Identifiable {
    isEditable: boolean;

    constructor() {
        super();

        this.isEditable = true;
    }
}