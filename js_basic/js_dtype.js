"use strict";

const js_dtype = {};
/*  Datatype basics  */
let v1 = 12;
const C1 = "string 'one'";
let c2 = v1 = 7;
const C2 = `C1 is ${C1}`;

let a = null;
const UND = a;
const UND1 = undefined;
let VOID;
const num = 1 + 2 + "3";
const num1 = 1 + 2 * 2 / "3";

function print_dtype() {
    console.log(v1);
    const v2 = 13 - v1 / 2;
    console.log(v2);
    console.log(`num: ${num}, num1: ${num1}`);
    console.log(C2 + " --done");
    console.log(`UND: ${UND},
        UND1: ${UND1},
        VOID: ${VOID},
        UND1==undefined: ${UND1 == undefined},
        UND1==null: ${UND1 == null},
        UND1===undefined: ${UND1 === undefined},
        UND1===null: ${UND1 === null},
        typeof v2: ${typeof v2},
        typeof(""+1): ${typeof("" + 1)},
        typeof(1+"0"): ${typeof(1 + "0")},
        Number(false): ${Number(false)},
        Number("ok"): ${Number("ok")},
        Boolean(NaN): ${Boolean(NaN)},
        Boolean(UND1): ${Boolean(UND1)},
        Boolean(C2): ${Boolean(C2)},
        null + 1: ${null + 1},
        undefined + 1: ${undefined + 1},
        "" + 1: ${"" + 1},
        '1'+'2': ${'1' + '2'},
        +'1' + +'2': ${+'1' + +'2'}
        `);
}

js_dtype.print_dtype = print_dtype;
js_dtype.v1 = v1;
module.exports = js_dtype;
