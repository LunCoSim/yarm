export interface ReqIF {
    lang: string; //[0..1]
    theHeader: ReqIFHeader;
    coreContent: ReqIFContent
    toolExtension: ReqIFToolExtension; 
}


//------------------------------------------------------------------------------
//Fields of RewIF

export interface ReqIFHeader {
    comment: string; //[0..1]
    creationTime: Date;
    identifier: string;
    repositoryId: string; //[0..1]
    reqIFToolId: string;
    reqIFVersion: string; //default = 1
    sourceToolId: string;
    title: string
}

export interface ReqIFContent {
    datatypes: DatatypeDefinition[];
    specTypes: SpecType[];
    specObjects: SpecObject[];
    specRelations: SpecRelation[];
    specifications: Specification[];
    specRelationsGroup: RelationGroup[];
}

export interface ReqIFToolExtension {

}

//------------------------------------------------------------------------------
//Identifiable

//TODO How to connect Identifiable and AlternativeID???? check page 29 figure 10.2 from ReqIF spec
export interface Identifiable {
    desc: string; //[0..1]
    identifier: string; //UUID
    lastChange: Date;
    longName: string; //[0..1];

    alternativeID: AlternativeID;
}

export interface AlternativeID {
    identifier: string;
    ident: Identifiable;
}

//----------------------
//Access restriction

//should be abstract class
export interface AccessControlledElement extends Identifiable {
    isEditable: boolean;
}



//------------------------------------------------------------------------------
//AttributeValue

//should be abstract class
export interface AttributeValue {
    specElAt: SpecElementWithAttributes[];
    defaultValue: AttributeDefinition;
}

//should be abstract class
export interface AttributeDefinition extends AccessControlledElement{
    specType: SpecType;

    definition: AttributeValue;
    owningDefinition: AttributeValue;

    editableAttrs: SpecHierarchy;
}

//------------------------------------------------------------------------------
//SpecElementWithAttributes

export interface SpecElementWithAttributes extends Identifiable {
    values: AttributeValue[]
}

//------------------------------------------------------------------------------
//Fields of ReqIFContent

export interface SpecType extends Identifiable {
    specAttributes: AttributeDefinition[];
}

export interface SpecificationType extends SpecType {
    specification: Specification[];
}

export interface SpecObjectType extends SpecType {
    specObject: SpecObject[];
}

export interface SpecRelationType extends SpecType {
    specRelation: SpecRelation[];
}

export interface RelationGroupType extends SpecType {
    relationGroup: RelationGroup[];
}

//------------------------------------------------------------------------------
//Fields of ReqIFContent

export interface SpecObject extends SpecElementWithAttributes {
    type: SpecObjectType;

    object: SpecHierarchy;

    source: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 
    target: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 

}

export interface SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType;
    
    specRelations: RelationGroup[];
}

export interface Specification extends SpecElementWithAttributes {
    type: SpecificationType;
    
    root: SpecHierarchy;

    sourceSpecification: RelationGroup;
    targetSpecificaiton: RelationGroup;
}

export interface RelationGroup extends SpecElementWithAttributes {
    type: RelationGroupType;
    specRelations: SpecRelation[];
}

//------------------------------------------------------------------------------
//Fields of AttributeDefinition

export interface AttributeDefinitionXHTML extends AttributeDefinition {
    definition: AttributeValueXHTML;
    owningDefinition: AttributeValueXHTML;
}

export interface AttributeDefinitionEnumeration extends AttributeDefinition {
    multiValued: boolean;
    
    definition: AttributeValueEnumeration;
    owningDefinition: AttributeValueEnumeration;
}

export interface AttributeDefinitionSimple extends AttributeDefinition {
    
}

export interface AttributeDefinitionBoolean extends AttributeDefinitionSimple {
    definition: AttributeValueBoolean;
    owningDefinition: AttributeValueBoolean;
}

export interface AttributeDefinitionDate extends AttributeDefinitionSimple {
    
}

export interface AttributeDefinitionInteger extends AttributeDefinitionSimple {
    
}

export interface AttributeDefinitionReal extends AttributeDefinitionSimple {
    
}

export interface AttributeDefinitionString extends AttributeDefinitionSimple {
    
}

//------------------------------------------------------------------------------
//Inheritad export interfacees of AttributeValue

export interface AttributeValueXHTML extends AttributeValue {
    isSimplified: boolean;
    defaultValue: AttributeDefinitionXHTML;

    attributeValue: XhtmlContent;
}

export interface AttributeValueEnumeration extends AttributeValue {
    defaultValue: AttributeDefinitionEnumeration;
    values: EnumValue;
}

export interface AttributeValueSimple extends AttributeValue {
    
}

export interface AttributeValueBoolean extends AttributeValueSimple {
    theValue: boolean;
    defaultValue: AttributeDefinitionBoolean;
}

export interface AttributeValueDate extends AttributeValueSimple {
    theValue: Date;
    defaultValue: AttributeDefinitionDate;
}

export interface AttributeValueInteger extends AttributeValueSimple {
    theValue: BigInteger;
    defaultValue: AttributeDefinitionInteger;
}

export interface AttributeValueReal extends AttributeValueSimple {
    theValue: number;
    defaultValue: AttributeDefinitionReal;
}

export interface AttributeValueString extends AttributeValueSimple {
    theValue: string;
    defaultValue: AttributeDefinitionString;
}

//------------------------------------------------------------------------------
//Inheritad export interfacees of 

export interface SpecHierarchy extends SpecElementWithAttributes {
    isTableInternal: boolean;
    object: SpecObject;
    parent: SpecHierarchy;
    children: Specification[]; //ordered
    specObjects: SpecObject[];
}

//------------------------------------------------------------------------------
//DatatypeDefinition

export interface DatatypeDefinition {
    type: AttributeDefinition;
}

export interface DatatypeDefinitionSimple extends DatatypeDefinition {
    type: AttributeDefinitionSimple;
}

export interface DatatypeDefinitionEnumeration extends DatatypeDefinition {
    type: AttributeDefinitionEnumeration;

}

export interface DatatypeDefinitionXHTML extends DatatypeDefinition {
    type: AttributeDefinitionXHTML;
}

//------------------

export interface DatatypeDefinitionBoolean extends DatatypeDefinitionSimple {
    type: AttributeDefinitionBoolean;
}

export interface DatatypeDefinitionInteger extends DatatypeDefinitionSimple {
    type: AttributeDefinitionInteger;
    max: BigInt;
    min: BigInt;
}

export interface DatatypeDefinitionReal extends DatatypeDefinitionSimple {
    type: AttributeDefinitionReal;

    accuracy: BigInt;
    max: number;
    min: number;
}

export interface DatatypeDefinitionString extends DatatypeDefinitionSimple {
    type: AttributeDefinitionString;

    maxLength: BigInt;
}

export interface DatatypeDefinitionDate extends DatatypeDefinitionSimple {
    type: AttributeDefinitionDate;
}

//--------------

export interface EnumValue {
    values: AttributeValueEnumeration;
    specifiedValues: DatatypeDefinitionEnumeration[];//ordered
    enumValue: EmbeddedValue
}

export interface EmbeddedValue {
    key: BigInt;
    otherContent: string;
}

export interface XhtmlContent {
    theValue: string;
    theOriginalValue: string;
}


