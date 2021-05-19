//------------------------------------------------------------------------------
//SpecElementWithAttributes

export interface SpecElementWithAttributes extends Identifiable {
    values: AttributeValue[]
}

//------------------------------------------------------------------------------
//Fields of ReqIFContent


export interface SpecObject extends SpecElementWithAttributes {
    type: SpecObjectType;

    object: SpecHierarchy;

    source: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 
    target: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 

}