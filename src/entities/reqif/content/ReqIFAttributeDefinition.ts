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
    definition: AttributeValue;
    owningDefinition: AttributeValue;
}

export interface AttributeDefinitionBoolean extends AttributeDefinitionSimple {
    definition: AttributeValueBoolean;
    owningDefinition: AttributeValueBoolean;
}

export interface AttributeDefinitionDate extends AttributeDefinitionSimple {
    definition: AttributeValueDate;
    owningDefinition: AttributeValueDate;
}

export interface AttributeDefinitionInteger extends AttributeDefinitionSimple {
    definition: AttributeValueInteger;
    owningDefinition: AttributeValueInteger;
}

export interface AttributeDefinitionReal extends AttributeDefinitionSimple {
    definition: AttributeValueReal;
    owningDefinition: AttributeValueReal;
}

export interface AttributeDefinitionString extends AttributeDefinitionSimple {
    definition: AttributeValueString;
    owningDefinition: AttributeValueString;
}

//------------------------------------------------------------------------------
//Inheritad export interfacees of AttributeValue

export interface AttributeValueSimple extends AttributeValue {
    
}

export interface AttributeValueXHTML extends AttributeValue {
    isSimplified: boolean;
    defaultValue: AttributeDefinitionXHTML;

    attributeValue: XhtmlContent;
}

export interface AttributeValueEnumeration extends AttributeValue {
    defaultValue: AttributeDefinitionEnumeration;
    values: EnumValue;
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


