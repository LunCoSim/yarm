import {ReqIFToolExtension} from "./ReqIFToolExtension";
import {ReqIFHeader} from "./ReqIFHeader"

// import {} from "./content/"
import {ReqIFContent} from "./content/ReqIFContent"


export interface ReqIF {
    lang: string; //[0..1]
    theHeader: ReqIFHeader;
    coreContent: ReqIFContent
    toolExtension: ReqIFToolExtension; 
}

