import { SpecHierarchy, SpecType } from "../content/ReqIFSpecTypes";
import { AccessControlledElement } from "../ReqIFAccessControlledElement";
import { AttributeValue, AttributeValueBoolean, AttributeValueDate, AttributeValueEnumeration, AttributeValueInteger, AttributeValueReal, AttributeValueString, AttributeValueXHTML } from "./ReqIFAttributeValue";


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

