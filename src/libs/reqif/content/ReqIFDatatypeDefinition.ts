import { AttributeDefinition, AttributeDefinitionBoolean, AttributeDefinitionDate, AttributeDefinitionEnumeration, AttributeDefinitionInteger, AttributeDefinitionReal, AttributeDefinitionSimple, AttributeDefinitionString, AttributeDefinitionXHTML } from "./ReqIFAttributeDefinition";

//------------------------------------------------------------------------------
//DatatypeDefinition

export class DatatypeDefinition {
    type: AttributeDefinition;
}

export class DatatypeDefinitionSimple extends DatatypeDefinition {
    type: AttributeDefinitionSimple;
}

export class DatatypeDefinitionEnumeration extends DatatypeDefinition {
    type: AttributeDefinitionEnumeration;

}

export class DatatypeDefinitionXHTML extends DatatypeDefinition {
    type: AttributeDefinitionXHTML;
}

//------------------

export class DatatypeDefinitionBoolean extends DatatypeDefinitionSimple {
    type: AttributeDefinitionBoolean;
}

export class DatatypeDefinitionInteger extends DatatypeDefinitionSimple {
    type: AttributeDefinitionInteger;
    max: BigInt;
    min: BigInt;
}

export class DatatypeDefinitionReal extends DatatypeDefinitionSimple {
    type: AttributeDefinitionReal;

    accuracy: BigInt;
    max: number;
    min: number;
}

export class DatatypeDefinitionString extends DatatypeDefinitionSimple {
    type: AttributeDefinitionString;

    maxLength: BigInt;
}

export class DatatypeDefinitionDate extends DatatypeDefinitionSimple {
    type: AttributeDefinitionDate;
}