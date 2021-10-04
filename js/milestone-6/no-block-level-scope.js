/*
    Prior to ES2015 (ES6), there was no block level scope in JavaScript
    like other languages. Eg: C/C++; There were only two possible scopes:
            * Global Scope
            * Function Scope

    From ECMAScript specification ES2015 (ES6), JS supports block-level scope
    with the following keywords:
            * const
            * let
    
    const is used to declare a constant, meaning:
            * it cannot be re-declared
            * it cannot be re-assigned
            * it has block-scope behaviour
    
    let is used to declare a variable, but only in block level scope.
*/

// Example of only global & function scope (prior to ES6):
var var1 = "Variable 1";
function globalFunctionScopeTest() {
    if (var1 == "Variable 1") {
        var var2 = "Variable 2";
    }
    console.log("Variable in global scope:", var1);  // demonstrating global scope
    console.log("Variable in function scope:", var2);  // demonstrating function scope
}

globalFunctionScopeTest();

// Example of block level scope (from ES6 - till now):
function blockLevelScopeTest() {
    let blockScopeVariable = "Block Scope Variable";
    if (blockScopeVariable == "Block Scope Variable") {
        const BLOCK_SCOPE_CONSTANT = "Block Scope Constant";
        console.log(blockScopeVariable);                // won't throw error, still in context
        console.log(BLOCK_SCOPE_CONSTANT);              // block level constant identifier
    }
    console.log(BLOCK_SCOPE_CONSTANT);                  // will throw error
}

blockLevelScopeTest();