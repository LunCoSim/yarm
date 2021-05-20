import { RelationGroup } from "./ReqIFRelationGroup";
import { SpecElementWithAttributes, SpecRelationType } from "./ReqIFSpecTypes";

export class SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType;
    specRelations: RelationGroup[];

    constructor() {
        super();

        this.type = new SpecRelationType();
        this.specRelations = [];        
    }
}

