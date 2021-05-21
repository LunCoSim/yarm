import { AccessControlledElement } from "../ReqIFAccessControlledElement"
import { DatatypeDefinitionEnumeration } from "./ReqIFDatatypeDefinition";
import { SpecElementWithAttributes, SpecHierarchy, SpecType } from "./ReqIFSpecTypes";


//AttributeValue

//should be abstract class
export class AttributeValue {
    specElAt: SpecElementWithAttributes[];
    defaultValue?: AttributeDefinition;

    constructor() {
        specElAt = [];
    }
}

//should be abstract class
export class AttributeDefinition extends AccessControlledElement{
    specType = SpecType;

    definition: AttributeValue;
    owningDefinition: AttributeValue;

    editableAttrs: SpecHierarchy;
}

//------------------------------------------------------------------------------
//Fields of AttributeDefinition

export class AttributeDefinitionXHTML extends AttributeDefinition {
    definition: AttributeValueXHTML;
    owningDefinition: AttributeValueXHTML;
}

export class AttributeDefinitionEnumeration extends AttributeDefinition {
    multiValued: boolean;
    
    definition: AttributeValueEnumeration;
    owningDefinition: AttributeValueEnumeration;
}

export class AttributeDefinitionSimple extends AttributeDefinition {
    definition: AttributeValue;
    owningDefinition: AttributeValue;
}

export class AttributeDefinitionBoolean extends AttributeDefinitionSimple {
    definition: AttributeValueBoolean;
    owningDefinition: AttributeValueBoolean;
}

export class AttributeDefinitionDate extends AttributeDefinitionSimple {
    definition: AttributeValueDate;
    owningDefinition: AttributeValueDate;
}

export class AttributeDefinitionInteger extends AttributeDefinitionSimple {
    definition: AttributeValueInteger;
    owningDefinition: AttributeValueInteger;
}

export class AttributeDefinitionReal extends AttributeDefinitionSimple {
    definition: AttributeValueReal;
    owningDefinition: AttributeValueReal;
}

export class AttributeDefinitionString extends AttributeDefinitionSimple {
    definition: AttributeValueString;
    owningDefinition: AttributeValueString;
}

//------------------------------------------------------------------------------
//Inheritad export classes of AttributeValue

//todo: remove dummy data
export class AttributeValueSimple extends AttributeValue {
    dummy: string
}

export class AttributeValueXHTML extends AttributeValue {
    isSimplified: boolean;
    defaultValue?: AttributeDefinitionXHTML;

    attributeValue: XhtmlContent;
}

export class AttributeValueEnumeration extends AttributeValue {
    defaultValue?: AttributeDefinitionEnumeration;
    values: EnumValue;
}

export class AttributeValueBoolean extends AttributeValueSimple {
    theValue: boolean;
    defaultValue?: AttributeDefinitionBoolean;
}

export class AttributeValueDate extends AttributeValueSimple {
    theValue: Date;
    defaultValue?: AttributeDefinitionDate;
}

export class AttributeValueInteger extends AttributeValueSimple {
    theValue: BigInteger;
    defaultValue?: AttributeDefinitionInteger;
}

export class AttributeValueReal extends AttributeValueSimple {
    theValue: number;
    defaultValue?: AttributeDefinitionReal;
}

export class AttributeValueString extends AttributeValueSimple {
    theValue: string;
    defaultValue?: AttributeDefinitionString;
}

//------------------------------------------------------------------------------
//Inheritad export classes of 

//--------------

export class EnumValue {
    values: AttributeValueEnumeration;
    specifiedValues: DatatypeDefinitionEnumeration[];//ordered
    enumValue: EmbeddedValue
}

export class EmbeddedValue {
    key: number;
    otherContent: string;
}

export class XhtmlContent {
    theValue: string;
    theOriginalValue: string;
}


