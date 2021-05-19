
export interface Specification extends SpecElementWithAttributes {
    type: SpecificationType;
    
    root: SpecHierarchy;

    sourceSpecification: RelationGroup;
    targetSpecificaiton: RelationGroup;
}