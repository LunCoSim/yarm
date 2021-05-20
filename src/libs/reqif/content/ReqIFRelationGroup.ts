import { SpecRelation } from "./ReqIFSpecRelation";
import { RelationGroupType, SpecElementWithAttributes } from "./ReqIFSpecTypes";

export interface RelationGroup extends SpecElementWithAttributes {
    type: RelationGroupType;
    specRelations: SpecRelation[];
}

