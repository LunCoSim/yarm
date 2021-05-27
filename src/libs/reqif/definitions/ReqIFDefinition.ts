import { SpecType } from "../content/ReqIFSpecTypes";
import { AccessControlledElement, SpecElementWithAttributes } from "./ReqIFBasicClasses";

/*
------------------------------------------------------------------------------
Basic abstract classes
------------------------------------------------------------------------------
*/

export class DatatypeDefinition {
    // type: AttributeDefinition;

    constructor() {
        // type = new AttributeDefinition();
    }
}


export class AttributeDefinition extends AccessControlledElement {
    // specType: SpecType;

    constructor(specType?: SpecType) {
        super();
        // this.spectype = specType;
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

export class DatatypeDefinitionSimple extends DatatypeDefinition {
    // type: AttributeDefinitionSimple;

    constructor() {
        super();
        
    }
}

export class AttributeDefinitionSimple extends AttributeDefinition {
    definition: AttributeValueSimple;
    owningDefinition?: AttributeValueSimple;

    constructor(definition?:AttributeValueSimple) {
        super();
        this.definition = definition || new AttributeValueSimple();
    }
}

export class AttributeValueSimple extends AttributeValue {
    dummy = "";

}

/*
------------------------------------------------------------------------------
Types definition
------------------------------------------------------------------------------
*/

//-----------
//XHTML

export class DatatypeDefinitionXHTML extends DatatypeDefinition {
    // type: AttributeDefinitionXHTML;

    constructor() {
        super();
        
    }
}

export class AttributeDefinitionXHTML extends AttributeDefinition {
    definition: AttributeValueXHTML;
    owningDefinition?: AttributeValueXHTML;

    constructor(definition?:AttributeValueXHTML) {
        super();
        this.definition = definition || new AttributeValueXHTML();
    }
}

export class AttributeValueXHTML extends AttributeValue {
    isSimplified = false;
    defaultValue?: AttributeDefinitionXHTML;

    attributeValue?: XhtmlContent;
}

export class XhtmlContent {
    theValue = "";
    theOriginalValue = "";
}

//-----------
//Enumeration

export class DatatypeDefinitionEnumeration extends DatatypeDefinition {
    //type: AttributeDefinitionEnumeration;

    constructor() {
        super();
        
    }
}

export class AttributeDefinitionEnumeration extends AttributeDefinition {
    multiValued = false;
    
    definition: AttributeValueEnumeration;
    owningDefinition?: AttributeValueEnumeration;

    constructor(definition?:AttributeValueEnumeration) {
        super();
        this.definition = definition || new AttributeValueEnumeration();
    }
}

export class AttributeValueEnumeration extends AttributeValue {
    defaultValue?: AttributeDefinitionEnumeration;
    values: EnumValue[] = [];
}

export class EnumValue {
    values?: AttributeValueEnumeration;
    specifiedValues?: DatatypeDefinitionEnumeration[];//ordered
    enumValue?: EmbeddedValue
}

export class EmbeddedValue {
    key: number;
    otherContent: string;//should be link to other content
    
    constructor() {
        this.key = 0;
        this.otherContent = "";
    }
}

//----------
//Boolean

export class DatatypeDefinitionBoolean extends DatatypeDefinitionSimple {
    //type: AttributeDefinitionBoolean;

    constructor() {
        super();
        
    }
}

export class AttributeDefinitionBoolean extends AttributeDefinitionSimple {
    definition: AttributeValueBoolean;
    owningDefinition?: AttributeValueBoolean;

    constructor(definition?:AttributeValueBoolean) {
        super();
        this.definition = definition || new AttributeValueBoolean();
    }
}

export class AttributeValueBoolean extends AttributeValueSimple {
    theValue: boolean;
    defaultValue?: AttributeDefinitionBoolean;

    constructor(theValue?:boolean) {
        super();
        this.theValue = theValue || false;
    }
}

//---------
//Date

export class DatatypeDefinitionDate extends DatatypeDefinitionSimple {
    //type: AttributeDefinitionDate;
}

export class AttributeDefinitionDate extends AttributeDefinitionSimple {
    definition: AttributeValueDate;
    owningDefinition?: AttributeValueDate;

    constructor(definition?:AttributeValueDate) {
        super();
        this.definition = definition || new AttributeValueDate();
    }
}

export class AttributeValueDate extends AttributeValueSimple {
    theValue: Date;
    defaultValue?: AttributeDefinitionDate;

    constructor(theValue?:Date) {
        super();
        this.theValue = theValue || new Date();
    }
}

//---------
//Integer

export class DatatypeDefinitionInteger extends DatatypeDefinitionSimple {
    //type: AttributeDefinitionInteger;
    max: number; //should be int
    min: number; //should be int

    constructor() {
        super();
        
        this.max = 0xFFFFFFFF;
        this.min = 0xFFFFFFFF;
    }
}

export class AttributeDefinitionInteger extends AttributeDefinitionSimple {
    definition: AttributeValueInteger;
    owningDefinition?: AttributeValueInteger;

    constructor(definition?:AttributeValueInteger) {
        super();
        this.definition = definition || new AttributeValueInteger();
    }
}

export class AttributeValueInteger extends AttributeValueSimple {
    theValue: number;
    defaultValue?: AttributeDefinitionInteger;

    constructor(theValue?:number) {
        super();
        this.theValue = theValue || 0;
    }
}


//---------
//Real

export class DatatypeDefinitionReal extends DatatypeDefinitionSimple {
    //type: AttributeDefinitionReal;

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

export class AttributeDefinitionReal extends AttributeDefinitionSimple {
    definition: AttributeValueReal;
    owningDefinition?: AttributeValueReal;

    constructor(definition?:AttributeValueReal) {
        super();
        this.definition = definition || new AttributeValueReal();
    }
}

export class AttributeValueReal extends AttributeValueSimple {
    theValue: number;
    defaultValue?: AttributeDefinitionReal;

    constructor(theValue?:number) {
        super();
        this.theValue = theValue || 0;
    }
}

//---------
//String

export class DatatypeDefinitionString extends DatatypeDefinitionSimple {
    //type: AttributeDefinitionString;

    maxLength: number; //should be int

    constructor() {
        super();
        
        this.maxLength = 8;//should be int
    }
}

export class AttributeDefinitionString extends AttributeDefinitionSimple {
    definition: AttributeValueString;
    owningDefinition?: AttributeValueString;

    constructor(definition?:AttributeValueString) {
        super();
        this.definition = definition || new AttributeValueString();
    }
}

export class AttributeValueString extends AttributeValueSimple {
    theValue: string;
    defaultValue?: AttributeDefinitionString;

    constructor(theValue?:string) {
        super();
        this.theValue = theValue || "";
    }
}



