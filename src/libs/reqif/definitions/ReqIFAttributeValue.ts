//AttributeValue

import { SpecElementWithAttributes } from "../content/ReqIFSpecTypes";
import { AttributeDefinition } from "./ReqIFAttributeDefinition";

//should be abstract class
export class AttributeValue {
    specElAt: SpecElementWithAttributes[];
    defaultValue?: AttributeDefinition;

    constructor() {
        this.specElAt = [];
    }
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
