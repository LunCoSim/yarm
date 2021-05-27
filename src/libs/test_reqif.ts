/*to run type:
Seems like tsc caches files and doesn't rebuild files unles resaved in case of automatic path change while moving files from
pne dir into another
//tsc test_reqif.ts -outDir ./build/
//node ./build/test_reqif.js 
*/

/*
To use fast xml parser on local machine
1. install globally using 
npm install -g fast-xml-parser
2. npm link fast-xml-parser
*/

import { sample_xml } from "./sample_xml";
import { parse } from "fast-xml-parser";

import { ReqIF } from "./reqif/ReqIF"

const r = new ReqIF();

const j = parse(sample_xml, {
    ignoreAttributes : false,
});

let reqif = j['REQ-IF'];
let header = reqif['THE-HEADER']['REQ-IF-HEADER'];
let content = reqif['CORE-CONTENT']['REQ-IF-CONTENT'];
//content properties
let datatypes = content['DATATYPES'];
let specTypes = content['SPEC-TYPES'];
let specObjects = content['SPEC-OBJECTS'];
let specifications = content['SPECIFICATIONS'];

