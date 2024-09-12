// src/PrecognitionContext/index.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var data = {
  url: null
};
var init = (params) => {
  data = params;
};
var Precognition = {
  init
};
var PrecognitionContext = React.createContext({
  config: data
});

// src/hooks/usePrecognition.ts
import React2 from "react";

// src/types/index.ts
var types_default = PrecognitionWrapper;
export {
  Precognition,
  PrecognitionContext
};
