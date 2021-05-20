import { RelationGroup } from "./ReqIFRelationGroup";
import { SpecElementWithAttributes, SpecHierarchy, SpecificationType } from "./ReqIFSpecTypes";

export class Specification extends SpecElementWithAttributes {
    type: SpecificationType;
    root: SpecHierarchy;
    sourceSpecification: RelationGroup;
    targetSpecificaiton: RelationGroup;

    constructor() {
        super();

        this.type = new SpecificationType();
        this.root = new SpecHierarchy();
        this.sourceSpecification = new RelationGroup();
        this.targetSpecificaiton = new RelationGroup();
    }
}