/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// Enables async/await in JS [part 1]
(async function() {
  Diagnostics.log("\n_  _ ____ ___  ____    ___  _   _    ____ _  _ ____ ____ ____  ____    \n|\\/| |__| |  \\ |___    |__]  \\_/     |  | |\\/| |___ | __ |__|  |       \n|  | |  | |__/ |___    |__]   |      |__| |  | |___ |__] |  | .|___    \n                                                                       \n_  _ _  _ _  _ ____  ____ ____ _    _     ____ ____ _    ____ ____ ___  \n|_/  |  | |\\ | |  |  |___ |___ |    |     |__| [__  |    |___ |___ |__] \n| \\_ |__| | \\| |__| .|    |___ |___ |___ .|  | ___] |___ |___ |___ |    \n");
})();
