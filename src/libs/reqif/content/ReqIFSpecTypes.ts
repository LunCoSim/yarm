import {Identifiable} from "../ReqIFIdentifiable"
import { AttributeDefinition, AttributeValue } from "./ReqIFAttributeDefinition";
import { RelationGroup } from "./ReqIFRelationGroup";
import { Specification } from "./ReqIFSpecification";
import { SpecObject } from "./ReqIFSpecObject";
import { SpecRelation } from "./ReqIFSpecRelation";

//------------------------------------------------------------------------------
//SpecElementWithAttributes

export interface SpecElementWithAttributes extends Identifiable {
    values: AttributeValue[]
}

export interface SpecType extends Identifiable {
    specAttributes: AttributeDefinition[];
}

export interface SpecificationType extends SpecType {
    specification: Specification[];
}

export interface SpecObjectType extends SpecType {
    specObject: SpecObject[];
}

export interface SpecRelationType extends SpecType {
    specRelation: SpecRelation[];
}

export interface RelationGroupType extends SpecType {
    relationGroup: RelationGroup[];
}

export interface SpecHierarchy extends SpecElementWithAttributes {
    isTableInternal: boolean;
    object: SpecObject;
    parent: SpecHierarchy;
    children: Specification[]; //ordered
    specObjects: SpecObject[];
}
