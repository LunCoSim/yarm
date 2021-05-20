import {Identifiable} from "./ReqIFIdentifiable"

//----------------------
//Access restriction

//should be abstract class
export interface AccessControlledElement extends Identifiable {
    isEditable: boolean;
}