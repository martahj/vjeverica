"use strict"
import modelFunctions from './modelfunctions';
import db from '../db';

const makeModel = collectionName =>
  Object.keys(modelFunctions).reduce( (newModel, funcName) =>
    newModel[funcName] = modelFunctions[funcName].bind(null, collectionName)
  , {});


export default makeModel;
