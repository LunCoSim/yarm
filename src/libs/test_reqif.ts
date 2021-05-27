/*to run type:
Seems like tsc caches files and doesn't rebuild files unles resaved in case of automatic path change while moving files from
pne dir into another
//tsc test_reqif.ts -outDir ./build/
//node ./build/test_reqif.js 
*/


import { sample_xml } from "./sample_xml";

import { ReqIF } from "./reqif/ReqIF"

const r = new ReqIF();

console.log("Hello");
console.log(sample_xml);

