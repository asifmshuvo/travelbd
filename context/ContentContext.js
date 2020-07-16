import { createContext } from "react";

//context for content-model (first-second column)
export const ContentContext = createContext(null);

export function ContentReducer(state, action) {
  switch (action.type) {
    case "SET_TARGET":
      return { target: action.payload.target };
    default:
      throw new Error();
  }
}

//context for content form-generation (third column)
export const ContentFormGeneratorContext = createContext(null);

export function ContentFormGeneratorReducer(state, action) {
  console.log('Log: ContentFormGeneratorReducer -> action.payload.formGenerationData', action.payload.formGenerationData)
  switch (action.type) {
    case "SET_FORM_GENERATOR":
      return { ...state, ...action.payload.formGenerationData };
    default:
      throw new Error();
  }
}

