import { AttributeDefinition, AttributeDefinitionBoolean, AttributeDefinitionDate, AttributeDefinitionEnumeration, AttributeDefinitionInteger, AttributeDefinitionReal, AttributeDefinitionSimple, AttributeDefinitionString, AttributeDefinitionXHTML } from "./ReqIFAttributeDefinition";

//------------------------------------------------------------------------------
//DatatypeDefinition

export class DatatypeDefinition {
    type: AttributeDefinition;

    constructor() {
        
    }
}

export class DatatypeDefinitionSimple extends DatatypeDefinition {
    type: AttributeDefinitionSimple;

    constructor() {
        super();
        
    }
}

export class DatatypeDefinitionEnumeration extends DatatypeDefinition {
    type: AttributeDefinitionEnumeration;

    constructor() {
        super();
        
    }

}

export class DatatypeDefinitionXHTML extends DatatypeDefinition {
    type: AttributeDefinitionXHTML;

    constructor() {
        super();
        
    }
}

//------------------

export class DatatypeDefinitionBoolean extends DatatypeDefinitionSimple {
    type: AttributeDefinitionBoolean;

    constructor() {
        super();
        
    }
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

export class DatatypeDefinitionString extends DatatypeDefinitionSimple {
    type: AttributeDefinitionString;

    maxLength: number; //should be int

    constructor() {
        super();
        
        this.maxLength = 8;//should be int
    }
}

export class DatatypeDefinitionDate extends DatatypeDefinitionSimple {
    type: AttributeDefinitionDate;
}