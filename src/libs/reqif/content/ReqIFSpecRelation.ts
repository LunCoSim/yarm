import { RelationGroup } from "./ReqIFRelationGroup";
import { SpecElementWithAttributes, SpecRelationType } from "./ReqIFSpecTypes";

export interface SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType;
    
    specRelations: RelationGroup[];
}

