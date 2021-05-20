import {DatatypeDefinition} from "./ReqIFDatatypeDefinition"
import {SpecType} from "./ReqIFSpecTypes"
import {SpecObject} from "./ReqIFSpecObject"
import {SpecRelation} from "./ReqIFSpecRelation"
import {Specification} from "./ReqIFSpecification"
import {RelationGroup} from "./ReqIFRelationGroup"

export interface ReqIFContent {
    datatypes: DatatypeDefinition[];
    specTypes: SpecType[];
    specObjects: SpecObject[];
    specRelations: SpecRelation[];
    specifications: Specification[];
    specRelationsGroup: RelationGroup[];
}