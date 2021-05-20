import { SpecRelation } from "./ReqIFSpecRelation";
import { RelationGroupType, SpecElementWithAttributes } from "./ReqIFSpecTypes";

export class RelationGroup extends SpecElementWithAttributes {
    type: RelationGroupType;
    specRelations: SpecRelation[];

    constructor() {
        super()

        this.type = new RelationGroupType();
        this.specRelations = [];        
    }
}

