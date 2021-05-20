//------------------------------------------------------------------------------
//Identifiable

//TODO How to connect Identifiable and AlternativeID???? check page 29 figure 10.2 from ReqIF spec
export interface Identifiable {
    desc: string; //[0..1]
    identifier: string; //UUID
    lastChange: Date;
    longName: string; //[0..1];

    alternativeID: AlternativeID;
}

export interface AlternativeID {
    identifier: string;
    ident: Identifiable;
}


