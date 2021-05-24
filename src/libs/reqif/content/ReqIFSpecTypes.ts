import { AttributeDefinition } from "./ReqIFDefinition";
import { Identifiable } from "../ReqIFBasicClasses"
import { RelationGroup } from "./ReqIFRelationGroup";
import { Specification } from "./ReqIFSpecification";
import { SpecObject } from "./ReqIFSpecObject";
import { SpecRelation } from "./ReqIFSpecRelation";

//------------------------------------------------------------------------------

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