export interface SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType;
    
    specRelations: RelationGroup[];
}

