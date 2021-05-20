import {Identifiable} from "../ReqIFIdentifiable"
import { AttributeDefinition, AttributeValue } from "./ReqIFAttributeDefinition";
import { RelationGroup } from "./ReqIFRelationGroup";
import { Specification } from "./ReqIFSpecification";
import { SpecObject } from "./ReqIFSpecObject";
import { SpecRelation } from "./ReqIFSpecRelation";

//------------------------------------------------------------------------------
//SpecElementWithAttributes

export class SpecElementWithAttributes extends Identifiable {
    values: AttributeValue[]
}

export class SpecType extends Identifiable {
    specAttributes: AttributeDefinition[];
}

export class SpecificationType extends SpecType {
    specification: Specification[];
}

export class SpecObjectType extends SpecType {
    specObject: SpecObject[];
}

export class SpecRelationType extends SpecType {
    specRelation: SpecRelation[];
}

export class RelationGroupType extends SpecType {
    relationGroup: RelationGroup[];
}

export class SpecHierarchy extends SpecElementWithAttributes {
    isTableInternal: boolean;
    object: SpecObject;
    parent: SpecHierarchy;
    children: Specification[]; //ordered
    specObjects: SpecObject[];
}
