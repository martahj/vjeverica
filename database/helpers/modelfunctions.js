"use strict"

const modelFunctions = {};

modelFunctions.getAll = coll => coll.find();

export default modelFunctions;
