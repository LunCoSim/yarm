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