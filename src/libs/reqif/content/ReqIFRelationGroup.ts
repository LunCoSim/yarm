import { SpecElementWithAttributes } from "../ReqIFBasicClasses";
import { SpecRelation } from "./ReqIFSpecRelation";
import { RelationGroupType } from "./ReqIFSpecTypes";

export class RelationGroup extends SpecElementWithAttributes {
    type: RelationGroupType;
    specRelations: SpecRelation[];

    constructor() {
        super()

        this.type = new RelationGroupType();
        this.specRelations = [];        
    }
}

