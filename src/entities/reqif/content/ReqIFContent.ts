import {DatatypeDefinition} from "./ReqIFDatatypeDefinition"
import {} from "./"

import {} from "./"

export interface ReqIFContent {
    datatypes: DatatypeDefinition[];
    specTypes: SpecType[];
    specObjects: SpecObject[];
    specRelations: SpecRelation[];
    specifications: Specification[];
    specRelationsGroup: RelationGroup[];
}