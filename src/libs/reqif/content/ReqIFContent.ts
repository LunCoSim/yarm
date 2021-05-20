import {DatatypeDefinition} from "./ReqIFDatatypeDefinition"
import {SpecType} from "./ReqIFSpecTypes"
import {SpecObject} from "./ReqIFSpecObject"
import {SpecRelation} from "./ReqIFSpecRelation"
import {Specification} from "./ReqIFSpecification"
import {RelationGroup} from "./ReqIFRelationGroup"

export class ReqIFContent {
    datatypes: DatatypeDefinition[];
    specTypes: SpecType[];
    specObjects: SpecObject[];
    specRelations: SpecRelation[];
    specifications: Specification[];
    specRelationsGroup: RelationGroup[];

    constructor() {
        this.datatypes = [];
        this.specTypes = [];
        this.specObjects = [];
        this.specRelations = [];
        this.specifications = [];
        this.specRelationsGroup = [];
    }
}