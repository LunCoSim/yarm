import { SpecElementWithAttributes } from "../ReqIFBasicClasses";
import { RelationGroup } from "./ReqIFRelationGroup";
import { SpecRelationType } from "./ReqIFSpecTypes";

export class SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType;
    specRelations: RelationGroup[];

    constructor() {
        super();

        this.type = new SpecRelationType();
        this.specRelations = [];        
    }
}

