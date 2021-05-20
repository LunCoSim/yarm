import {Identifiable} from "./ReqIFIdentifiable"

export interface ReqIFHeader extends Identifiable {
    comment: string; //[0..1]
    creationTime: Date;
    identifier: string;
    repositoryId: string; //[0..1]
    reqIFToolId: string;
    reqIFVersion: string; //default = 1
    sourceToolId: string;
    title: string
}