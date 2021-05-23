import {DatatypeDefinition} from "./content/definitions/ReqIFDatatypeDefinition"
import {SpecType} from "./content/ReqIFSpecTypes"
import {SpecObject} from "./content/ReqIFSpecObject"
import {SpecRelation} from "./content/ReqIFSpecRelation"
import {Specification} from "./content/ReqIFSpecification"
import {RelationGroup} from "./content/ReqIFRelationGroup"

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