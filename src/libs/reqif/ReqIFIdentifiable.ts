//------------------------------------------------------------------------------
//Identifiable

//TODO How to connect Identifiable and AlternativeID???? check page 29 figure 10.2 from ReqIF spec
export class Identifiable {
    desc: string; //[0..1]
    identifier: string; //UUID
    lastChange: Date;
    longName: string; //[0..1];

    alternativeID?: AlternativeID;

    constructor() {
        this.desc = "";
        this.identifier = "";
        this.lastChange = new Date();
        this.longName = "";
        this.alternativeID = undefined;
    }
}

export class AlternativeID {
    identifier: string;
    ident: Identifiable;

    constructor(backlink?: Identifiable) {
        this.identifier = "";
        this.ident = backlink || new Identifiable();
    }
}


