import { AttributeDefinition } from "../definitions/ReqIFAttributeDefinition";
import { AttributeValue } from "../definitions/ReqIFAttributeValue";
import { Identifiable } from "../ReqIFIdentifiable"
import { RelationGroup } from "./ReqIFRelationGroup";
import { Specification } from "./ReqIFSpecification";
import { SpecObject } from "./ReqIFSpecObject";
import { SpecRelation } from "./ReqIFSpecRelation";

//------------------------------------------------------------------------------
//SpecElementWithAttributes

export class SpecElementWithAttributes extends Identifiable {
    values: AttributeValue[]

    constructor() {
        super()

        this.values = [];
    }
}

export class SpecType extends Identifiable {
    specAttributes: AttributeDefinition[];

    constructor() {
        super()

        this.specAttributes = []
    }
}

export class SpecificationType extends SpecType {
    specification: Specification[];

    constructor() {
        super()

        this.specification = [];
    }
}

export class SpecObjectType extends SpecType {
    specObject: SpecObject[];

    constructor() {
        super();

        this.specObject = [];
    }
}

export class SpecRelationType extends SpecType {
    specRelation: SpecRelation[];

    constructor() {
        super();

        this.specRelation = [];
    }
}

export class RelationGroupType extends SpecType {
    relationGroup: RelationGroup[];

    constructor() {
        super();

        this.relationGroup = [];
    }
}

export class SpecHierarchy extends SpecElementWithAttributes {
    isTableInternal: boolean;
    object: SpecObject;
    parent: SpecHierarchy;
    children: Specification[]; //ordered
    specObjects: SpecObject[];

    constructor() {
        super()

        this.isTableInternal = false;
        this.object = new SpecObject();
        this.parent = new SpecHierarchy();
        this.children = []; //ordered
        this.specObjects = [];
        
    
    }
}
