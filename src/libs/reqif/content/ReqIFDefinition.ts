import { SpecElementWithAttributes, SpecHierarchy, SpecType } from "./ReqIFSpecTypes";
import { AccessControlledElement } from "../ReqIFAccessControlledElement";

/*
------------------------------------------------------------------------------
Basic abstract classes
------------------------------------------------------------------------------
*/

export class AttributeDefinition extends AccessControlledElement{
    specType = SpecType;

    definition: AttributeValue;
    owningDefinition: AttributeValue;

    editableAttrs: SpecHierarchy;

    constructor(definition?:AttributeValue, owningDefinition?: AttributeValue, editableAttrs?:SpecHierarchy) {
        super();

        this.definition = definition || new AttributeValue();
        this.owningDefinition = owningDefinition || new AttributeValue();
        this.editableAttrs = editableAttrs || new SpecHierarchy();

    }
}

export class DatatypeDefinition {
    type = AttributeDefinition;

    constructor() {
        
    }
}

export class AttributeValue {
    specElAt: SpecElementWithAttributes[];
    defaultValue?: AttributeDefinition;

    constructor() {
        this.specElAt = [];
    }
}

/*
------------------------------------------------------------------------------
Simple class
------------------------------------------------------------------------------
*/

export class AttributeDefinitionSimple extends AttributeDefinition {
    definition: AttributeValueSimple;
    owningDefinition: AttributeValueSimple;
}

export class DatatypeDefinitionSimple extends DatatypeDefinition {
    type: AttributeDefinitionSimple;

    constructor() {
        super();
        
    }
}

export class AttributeValueSimple extends AttributeValue {
    dummy: string
}

/*
------------------------------------------------------------------------------
Types definition
------------------------------------------------------------------------------
*/

//-----------
//XHTML

export class AttributeDefinitionXHTML extends AttributeDefinition {
    definition: AttributeValueXHTML;
    owningDefinition: AttributeValueXHTML;
}

export class DatatypeDefinitionXHTML extends DatatypeDefinition {
    type: AttributeDefinitionXHTML;

    constructor() {
        super();
        
    }
}

export class XhtmlContent {
    theValue: string;
    theOriginalValue: string;
}

export class AttributeValueXHTML extends AttributeValue {
    isSimplified: boolean;
    defaultValue?: AttributeDefinitionXHTML;

    attributeValue: XhtmlContent;
}

//-----------
//Enumeration

export class AttributeDefinitionEnumeration extends AttributeDefinition {
    multiValued: boolean;
    
    definition: AttributeValueEnumeration;
    owningDefinition: AttributeValueEnumeration;
}

export class DatatypeDefinitionEnumeration extends DatatypeDefinition {
    type: AttributeDefinitionEnumeration;

    constructor() {
        super();
        
    }
}

export class AttributeValueEnumeration extends AttributeValue {
    defaultValue?: AttributeDefinitionEnumeration;
    values: EnumValue;
}


export class EnumValue {
    values: AttributeValueEnumeration;
    specifiedValues: DatatypeDefinitionEnumeration[];//ordered
    enumValue: EmbeddedValue
}

export class EmbeddedValue {
    key: number;
    otherContent: string;//should be link to other content
    
}


//----------
//Boolean

export class AttributeDefinitionBoolean extends AttributeDefinitionSimple {
    definition: AttributeValueBoolean;
    owningDefinition: AttributeValueBoolean;
}

export class DatatypeDefinitionBoolean extends DatatypeDefinitionSimple {
    type = AttributeDefinitionBoolean;

    constructor() {
        super();
        
    }
}

export class AttributeValueBoolean extends AttributeValueSimple {
    theValue: boolean;
    defaultValue?: AttributeDefinitionBoolean;
}

//---------
//Date
export class AttributeDefinitionDate extends AttributeDefinitionSimple {
    definition: AttributeValueDate;
    owningDefinition: AttributeValueDate;
}

export class DatatypeDefinitionDate extends DatatypeDefinitionSimple {
    type: AttributeDefinitionDate;
}

export class AttributeValueDate extends AttributeValueSimple {
    theValue: Date;
    defaultValue?: AttributeDefinitionDate;
}




//---------
//Integer

export class AttributeDefinitionInteger extends AttributeDefinitionSimple {
    definition: AttributeValueInteger;
    owningDefinition: AttributeValueInteger;
}

export class DatatypeDefinitionInteger extends DatatypeDefinitionSimple {
    type: AttributeDefinitionInteger;
    max: number; //should be int
    min: number; //should be int

    constructor() {
        super();
        
        this.max = 0xFFFFFFFF;
        this.min = 0xFFFFFFFF;
    }
}

export class AttributeValueInteger extends AttributeValueSimple {
    theValue: BigInteger;
    defaultValue?: AttributeDefinitionInteger;
}


//---------
//Real

export class AttributeDefinitionReal extends AttributeDefinitionSimple {
    definition: AttributeValueReal;
    owningDefinition: AttributeValueReal;
}


export class DatatypeDefinitionReal extends DatatypeDefinitionSimple {
    type: AttributeDefinitionReal;

    accuracy: number;//should be int
    max: number;
    min: number;

    constructor() {
        super();
        
        this.accuracy = 8;//should be int
        this.max = 0xFFFFFF;
        this.min = -0xFFFFF;
    }
}

export class AttributeValueReal extends AttributeValueSimple {
    theValue: number;
    defaultValue?: AttributeDefinitionReal;
}


//---------
//String

export class AttributeDefinitionString extends AttributeDefinitionSimple {
    definition: AttributeValueString;
    owningDefinition: AttributeValueString;
}

export class DatatypeDefinitionString extends DatatypeDefinitionSimple {
    type: AttributeDefinitionString;

    maxLength: number; //should be int

    constructor() {
        super();
        
        this.maxLength = 8;//should be int
    }
}

export class AttributeValueString extends AttributeValueSimple {
    theValue: string;
    defaultValue?: AttributeDefinitionString;
}

