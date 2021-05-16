class ReqIF {
    lang: String; //[0..1]
    theHeader: ReqIFHeader;
    coreContent: ReqIFContent
    toolExtension: ReqIFToolExtension; 
};


//------------------------------------------------------------------------------
//Fields of RewIF

class ReqIFHeader {
    comment: String; //[0..1]
    creationTime: Date;
    identifier: String;
    repositoryId: String; //[0..1]
    reqIFToolId: String;
    reqIFVersion: String; //default = 1
    sourceToolId: String;
    title: String
}

class ReqIFContent {
    datatypes: DatatypeDefinition[];
    specTypes: SpecType[];
    specObjects: SpecObject[];
    specRelations: SpecRelation[];
    specifications: Specification[];
    specRelationsGroup: RelationGroup[];
}

class ReqIFToolExtension {

}

//------------------------------------------------------------------------------
//Identifiable

//TODO How to connect Identifiable and AlternativeID???? check page 29 figure 10.2 from ReqIF spec
class Identifiable {
    desc: String; //[0..1]
    identifier: String; //UUID
    lastChange: Date;
    longName: String; //[0..1];

    alternativeID: AlternativeID;
}

class AlternativeID {
    identifier: String;
    ident: Identifiable;
}

//----------------------
//Access restriction

abstract class AccessControlledElement extends Identifiable {
    isEditable: Boolean;
}



//------------------------------------------------------------------------------
//AttributeValue

abstract class AttributeValue {
    specElAt: SpecElementWithAttributes[];
    defaultValue: AttributeDefinition;
    
}

abstract class AttributeDefinition extends AccessControlledElement{
    specType: SpecType;

    definition: AttributeValue;
    owningDefinition: AttributeValue;

    editableAttrs: SpecHierarchy;
}

//------------------------------------------------------------------------------
//SpecElementWithAttributes

class SpecElementWithAttributes extends Identifiable {
    values: AttributeValue[]
}

//------------------------------------------------------------------------------
//Fields of ReqIFContent

class SpecType extends Identifiable {
    specAttributes: AttributeDefinition[];
}

class SpecificationType extends SpecType {
    specification: Specification[];
}

class SpecObjectType extends SpecType {
    specObject: SpecObject[];
}

class SpecRelationType extends SpecType {
    specRelation: SpecRelation[];
}

class RelationGroupType extends SpecType {
    relationGroup: RelationGroup[];
}

//------------------------------------------------------------------------------
//Fields of ReqIFContent

class SpecObject extends SpecElementWithAttributes {
    type: SpecObjectType;

    object: SpecHierarchy;

    source: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 
    target: SpecRelation; //Global shared object, maybe in external source e.g. wikipedia 

}

class SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType;
    
    specRelations: RelationGroup[];
}

class Specification extends SpecElementWithAttributes {
    type: SpecificationType;
    
    root: SpecHierarchy;

    sourceSpecification: RelationGroup;
    targetSpecificaiton: RelationGroup;
}

class RelationGroup extends SpecElementWithAttributes {
    type: RelationGroupType;
    specRelations: SpecRelation[];
}

//------------------------------------------------------------------------------
//Fields of AttributeDefinition

class AttributeDefinitionXHTML extends AttributeDefinition {
    definition: AttributeValueXHTML;
    owningDefinition: AttributeValueXHTML;
}

class AttributeDefinitionEnumeration extends AttributeDefinition {
    multiValued: Boolean;
    
    definition: AttributeValueEnumeration;
    owningDefinition: AttributeValueEnumeration;
}

class AttributeDefinitionSimple extends AttributeDefinition {
    
}

class AttributeDefinitionBoolean extends AttributeDefinitionSimple {
    definition: AttributeValueBoolean;
    owningDefinition: AttributeValueBoolean;
}

class AttributeDefinitionDate extends AttributeDefinitionSimple {
    
}

class AttributeDefinitionInteger extends AttributeDefinitionSimple {
    
}

class AttributeDefinitionReal extends AttributeDefinitionSimple {
    
}

class AttributeDefinitionString extends AttributeDefinitionSimple {
    
}

//------------------------------------------------------------------------------
//Inheritad classes of AttributeValue

class AttributeValueXHTML extends AttributeValue {
    isSimplified: Boolean;
    defaultValue: AttributeDefinitionXHTML;

    attributeValue: XhtmlContent;
}

class AttributeValueEnumeration extends AttributeValue {
    defaultValue: AttributeDefinitionEnumeration;
    values: EnumValue;
}

class AttributeValueSimple extends AttributeValue {
    
}

class AttributeValueBoolean extends AttributeValueSimple {
    theValue: Boolean;
    defaultValue: AttributeDefinitionBoolean;
}

class AttributeValueDate extends AttributeValueSimple {
    theValue: Date;
    defaultValue: AttributeDefinitionDate;
}

class AttributeValueInteger extends AttributeValueSimple {
    theValue: BigInteger;
    defaultValue: AttributeDefinitionInteger;
}

class AttributeValueReal extends AttributeValueSimple {
    theValue: Number;
    defaultValue: AttributeDefinitionReal;
}

class AttributeValueString extends AttributeValueSimple {
    theValue: String;
    defaultValue: AttributeDefinitionString;
}

//------------------------------------------------------------------------------
//Inheritad classes of 

class SpecHierarchy extends SpecElementWithAttributes {
    isTableInternal: Boolean;
    object: SpecObject;
    parent: SpecHierarchy;
    children: Specification[]; //ordered
    specObjects: SpecObject[];
}

//------------------------------------------------------------------------------
//DatatypeDefinition

class DatatypeDefinition {
    type: AttributeDefinition;
}

class DatatypeDefinitionSimple extends DatatypeDefinition {
    type: AttributeDefinitionSimple;
}

class DatatypeDefinitionEnumeration extends DatatypeDefinition {
    type: AttributeDefinitionEnumeration;

}

class DatatypeDefinitionXHTML extends DatatypeDefinition {
    type: AttributeDefinitionXHTML;
}

//------------------

class DatatypeDefinitionBoolean extends DatatypeDefinitionSimple {
    type: AttributeDefinitionBoolean;
}

class DatatypeDefinitionInteger extends DatatypeDefinitionSimple {
    type: AttributeDefinitionInteger;
    max: BigInt;
    min: BigInt;
}

class DatatypeDefinitionReal extends DatatypeDefinitionSimple {
    type: AttributeDefinitionReal;

    accuracy: BigInt;
    max: Number;
    min: Number;
}

class DatatypeDefinitionString extends DatatypeDefinitionSimple {
    type: AttributeDefinitionString;

    maxLength: BigInt;
}

class DatatypeDefinitionDate extends DatatypeDefinitionSimple {
    type: AttributeDefinitionDate;
}

//--------------

class EnumValue {
    values: AttributeValueEnumeration;
    specifiedValues: DatatypeDefinitionEnumeration[];//ordered
    enumValue: EmbeddedValue
}

class EmbeddedValue {
    key: BigInt;
    otherContent: String;
}

class XhtmlContent {
    theValue: String;
    theOriginalValue: String;
}


