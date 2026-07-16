export const edges = [

  // ---------------- PSR ----------------

{
  id: "psr-ferA",
  source:"psrCh",
  target: "ferA",
  sourceHandle: "bottom-source",
  targetHandle: "top-in",
  type: "step",
},

{
  id: "psr-ferB",
  source:"psrCh",
  target: "ferB",
  sourceHandle: "left-source",
  targetHandle: "top-in",
  type: "step",
},

  // ---------------- FER ----------------

{
  id: "ferA-exciterA",
  source: "ferA",
  target: "exciterA",
  sourceHandle: "bottom-out",
  targetHandle: "top-in",
  type: "straight",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

  {
    id: "ferB-exciterB",
    source: "ferB",
    target: "exciterB",
    type: "straight",
  },

  // ---------------- RJ ----------------

 {
  id: "rj-sstx",
  source: "rj",
  target: "sstx",
  sourceHandle: "left-source",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

  // ---------------- SSTX ----------------

  

  {
    id: "sstx-prsu",
    source: "sstx",
    target: "prsu",
    type: "straight",
  },

  // ---------------- PRSU ----------------
// PRSU -> RC-A
{
  id: "prsu-rcA",
  source: "prsu",
  target: "rcA",
  sourceHandle: "left-out",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

// PRSU -> RC-B
{
  id: "prsu-rcB",
  source: "prsu",
  target: "rcB",
  sourceHandle: "right-out",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

  // ---------------- MSSR ----------------

  {
  id: "mssr-mssrA",
  source: "mssr",
  target: "mssrA",
  sourceHandle: "bottom-source",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

  {
  id: "mssr-mssrB",
  source: "mssr",
  target: "mssrB",
  sourceHandle: "bottom-source",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},
{
  id: "mssr-encoder",
  source: "mssr",
  target: "encoder",
  sourceHandle: "right-source",
  targetHandle: "left-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

  // ---------------- EXCITER A ----------------

 {
  id: "exciterA-ifdc",
  source: "exciterA",
  target: "ifdcA",
  sourceHandle: "bottom",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

 {
  id: "exciterA-msg",
  source: "exciterA",
  target: "msgA",
  sourceHandle: "bottom",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

 {
  id: "exciterA-upc",
  source: "exciterA",
  target: "upcA",
  sourceHandle: "bottom",
  targetHandle: "top-in",
  type: "smoothstep",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

// ---------------- EXCITER B ----------------

{
  id: "exciterB-upc",
  source: "exciterB",
  target: "upcB",
  sourceHandle: "bottom",
  targetHandle: "top-in",
  type: "step",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

{
  id: "exciterB-msg",
  source: "exciterB",
  target: "msgB",
  sourceHandle: "bottom-out",
  targetHandle: "top-in",
  type: "step",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

{
  id: "exciterB-ifdc",
  source: "exciterB",
  target: "ifdcB",
  sourceHandle: "bottom",
  targetHandle: "top-in",
  type: "step",
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
},

  // ---------------- A CHANNEL ----------------

  {
    id: "ifdc-spA",
    source: "ifdcA",
    target: "spA",
    type: "step",
  },

  {
    id: "wgm-spA",
    source: "wgmA",
    target: "spA",
    type: "straight",
  },

  {
    id: "msg-wgmA",
    source: "msgA",
    target: "wgmA",
    type: "straight",
  },

  {
    id: "upc-wgmA",
    source: "upcA",
    target: "wgmA",
    type: "step",
  },

  {
    id: "ifdc-exciterA",
    source: "ifdcA",
    target: "exciterA",
    type: "step",
  },

  // ---------------- B CHANNEL ----------------

  {
    id: "upc-spB",
    source: "upcB",
    target: "spB",
    type: "step",
  },

  {
    id: "wgm-spB",
    source: "wgmB",
    target: "spB",
    type: "straight",
  },

  {
    id: "msg-wgmB",
    source: "msgB",
    target: "wgmB",
    type: "straight",
  },

  {
    id: "ifdc-wgmB",
    source: "ifdcB",
    target: "wgmB",
    type: "step",
  },

  // ---------------- RC A ----------------

  {
    id: "rcA-cent",
    source: "rcA",
    target: "centroiderA",
    type: "straight",
  },

  {
    id: "centA-track",
    source: "centroiderA",
    target: "trackerA",
    type: "straight",
  },

  {
    id: "trackA-rm",
    source: "trackerA",
    target: "rmA",
    type: "straight",
  },

  // ---------------- RC B ----------------

  {
    id: "rcB-cent",
    source: "rcB",
    target: "centroiderB",
    type: "straight",
  },

  {
    id: "centB-track",
    source: "centroiderB",
    target: "trackerB",
    type: "straight",
  },

  {
    id: "trackB-rm",
    source: "trackerB",
    target: "rmB",
    type: "straight",
  },
];