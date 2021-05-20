import { SpecRelation } from "./ReqIFSpecRelation";
import { SpecElementWithAttributes, SpecHierarchy, SpecObjectType } from "./ReqIFSpecTypes";

//------------------------------------------------------------------------------

export interface SpecObject extends SpecElementWithAttributes {
    type: SpecObjectType;
    object: SpecHierarchy;
    source: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 
    target: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 
}