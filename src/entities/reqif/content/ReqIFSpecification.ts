import { RelationGroup } from "./ReqIFRelationGroup";
import { SpecElementWithAttributes, SpecHierarchy, SpecificationType } from "./ReqIFSpecTypes";

export interface Specification extends SpecElementWithAttributes {
    type: SpecificationType;
    root: SpecHierarchy;
    sourceSpecification: RelationGroup;
    targetSpecificaiton: RelationGroup;
}