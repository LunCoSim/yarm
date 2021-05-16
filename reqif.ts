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

//------------------------------------------------------------------------------
//AttributeValue

class AttributeValue {
    specElAt: SpecElementWithAttributes[];
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
    specification: Specification;
}

class SpecObjectType extends SpecType {
    specObject: SpecObject;
}

class SpecRelationType extends SpecType {
    specRelation: SpecRelation;
}

class RelationGroupType extends SpecType {
    relationGroup: RelationGroup;
}


//------------------------------------------------------------------------------
//Fields of ReqIFContent

class DatatypeDefinition {

}

class SpecObject extends SpecElementWithAttributes {
    types: SpecObjectType[];//*
}

class SpecRelation extends SpecElementWithAttributes {
    types: SpecRelationType[];//*
}

class Specification extends SpecElementWithAttributes {
    types: SpecificationType[];//*
}

class RelationGroup extends SpecElementWithAttributes {
    types: RelationGroupType[];//*
    specRelations: SpecRelation[];
}

//------------------------------------------------------------------------------
//Fields of ReqIFToolExtension

class AttributeDefinition {
    specType: SpecType;

}

//------------------------------------------------------------------------------
//Inheritad classes of SpecType


