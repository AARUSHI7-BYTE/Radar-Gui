export const nodes = [


    // ===========================
// RADAR BLOCK TITLE
// ===========================
{
  id: "title",
  type: "labelNode",
  position: { x: 540, y: -50 },
  data: {
    label: "RADAR BLOCK",
  },
},

// ===========================
// ANTENNA ICON
// ===========================
{
  id: "antennaIcon",
  type: "labelNode",
  position: { x: 160, y: 15 },
  data: {
    label: "📡",
  },
},

// ===========================
// SCAN RATE
// ===========================
{
  id: "scanRate",
  type: "labelNode",
  position: { x: 980, y: 10 },
  data: {
    label: "SCAN RATE : 12 RPM",
  },
},

// ===========================
// POLARISATION
// ===========================
{
  id: "polarisation",
  type: "labelNode",
  position: { x: 980, y: 55 },
  data: {
    label: "POLARISATION : LINEAR",
  },
},



  // ===========================
  // ANTENNA
  // ===========================
  {
    id: "antenna",
    type: "buttonNode",
    position: { x: 560, y: 20 },
    data: {
      label: "ANTENNA",
      onClick: () => alert("ANTENNA"),
    },
  },

  // ====================================
// PSR CH
// ====================================

{
  id: "psrCh",
  type: "labelNode",
  position: { x: 120, y: 220 },
  data: {
    label: "PSR CH",
  },
},

// ====================================
// RJ
// ====================================

{
  id: "rj",
  type: "labelNode",
  position: { x: 640, y: 220 },
  data: {
    label: "RJ",
    subLabel: "ROTARY JOINT",
  },
},

// ====================================
// MSSR CH
// ====================================

{
  id: "mssr",
  type: "labelNode",
  position: { x: 1030, y: 220 },
  data: {
    label: "MSSR CH",
  },
},

// ====================================
// ENCODER BOX
// ====================================

{
  id: "encoder",
  type: "buttonNode",
  position: { x: 1220, y: 205 },
  data: {
    label: "ENCODER BOX",
    disabled: false,
    onClick: () => alert("ENCODER BOX"),
  },
},

// ====================================
// MSSR CH-A
// ====================================

{
  id: "mssrA",
  type: "buttonNode",
  position: { x: 930, y: 310 },
  data: {
    label: "MSSR CH-A",
    disabled: true,
    onClick: () => alert("MSSR CH-A"),
  },
},

// ====================================
// MSSR CH-B
// ====================================

{
  id: "mssrB",
  type: "buttonNode",
  position: { x: 1140, y: 310 },
  data: {
    label: "MSSR CH-B",
    disabled: true,
    onClick: () => alert("MSSR CH-B"),
  },
},

  // ====================================
// FER-A
// ====================================

{
  id: "ferA",
  type: "buttonNode",
  position: { x: 80, y: 390 },
  data: {
    label: "FER-A",
    onClick: () => alert("FER-A"),
  },
},

// ====================================
// SSTX
// ====================================

{
  id: "sstx",
  type: "buttonNode",
  position: { x: 620, y: 390 },
  data: {
    label: "SSTX",
    onClick: () => alert("SSTX"),
  },
},

// ====================================
// FER-B
// ====================================

{
  id: "ferB",
  type: "buttonNode",
  position: { x: 1160, y: 390 },
  data: {
    label: "FER-B",
    disabled: true,
    onClick: () => alert("FER-B"),
  },
},

// ====================================
// PRSU
// ====================================

{
  id: "prsu",
  type: "buttonNode",
  position: { x: 620, y: 560 },
  data: {
    label: "PRSU",
    onClick: () => alert("PRSU"),
  },
},

   // ==========================
// EXCITER-A
// ==========================
{
  id: "exciterA",
  type: "buttonNode",
  position: { x: 70, y: 540 },
  data: {
    label: "EXCITER-A",
    onClick: () => alert("EXCITER-A"),
  },
},

// ==========================
// IFDC
// ==========================
{
  id: "ifdcA",
  type: "buttonNode",
  position: { x: 20, y: 690 },
  data: {
    label: "IFDC",
    onClick: () => alert("IFDC"),
  },
},

// ==========================
// MSG
// ==========================
{
  id: "msgA",
  type: "buttonNode",
  position: { x: 160, y: 690 },
  data: {
    label: "MSG",
    onClick: () => alert("MSG"),
  },
},

// ==========================
// UPC
// ==========================
{
  id: "upcA",
  type: "buttonNode",
  position: { x: 300, y: 690 },
  data: {
    label: "UPC",
    onClick: () => alert("UPC"),
  },
},

// ==========================
// WGM-A
// ==========================
{
  id: "wgmA",
  type: "buttonNode",
  position: { x: 160, y: 840 },
  data: {
    label: "WGM-A",
    onClick: () => alert("WGM-A"),
  },
},

// ==========================
// SP-A
// ==========================
{
  id: "spA",
  type: "buttonNode",
  position: { x: 160, y: 980 },
  data: {
    label: "SP-A",
    onClick: () => alert("SP-A"),
  },
},

   // ==========================
// EXCITER-B
// ==========================
{
  id: "exciterB",
  type: "buttonNode",
  position: { x: 1160, y: 540 },
  data: {
    label: "EXCITER-B",
    disabled: true,
    onClick: () => alert("EXCITER-B"),
  },
},

// ==========================
// UPC-B
// ==========================
{
  id: "upcB",
  type: "buttonNode",
  position: { x: 1020, y: 690 },
  data: {
    label: "UPC",
    disabled: true,
    onClick: () => alert("UPC-B"),
  },
},

// ==========================
// MSG-B
// ==========================
{
  id: "msgB",
  type: "buttonNode",
position: { x: 1160, y: 690 },
  data: {
    label: "MSG",
    disabled: true,
    onClick: () => alert("MSG-B"),
  },
},

// ==========================
// IFDC-B
// ==========================
{
  id: "ifdcB",
  type: "buttonNode",
 position: { x: 1300, y: 690 },
  data: {
    label: "IFDC",
    disabled: true,
    onClick: () => alert("IFDC-B"),
  },
},

// ==========================
// WGM-B
// ==========================
{
  id: "wgmB",
  type: "buttonNode",
  position: { x: 1160, y: 840 },
  data: {
    label: "WGM-B",
    disabled: true,
    onClick: () => alert("WGM-B"),
  },
},

// ==========================
// SP-B
// ==========================
{
  id: "spB",
  type: "buttonNode",
   position: { x: 1160, y: 980 },
  data: {
    label: "SP-B",
    disabled: true,
    onClick: () => alert("SP-B"),
  },
},
    // ==========================
// RC-A
// ==========================
{
  id: "rcA",
  type: "buttonNode",
  position: { x: 420, y: 720 },
  data: {
    label: "RC-A",
    onClick: () => alert("RC-A"),
  },
},

// ==========================
// CENTROIDER-A
// ==========================
{
  id: "centroiderA",
  type: "buttonNode",
  position: { x: 420, y: 860 },
  data: {
    label: "CENTROIDER-A",
    onClick: () => alert("CENTROIDER-A"),
  },
},

// ==========================
// TRACKER-A
// ==========================
{
  id: "trackerA",
  type: "buttonNode",
  position: { x: 420, y: 1000 },
  data: {
    label: "TRACKER-A",
    onClick: () => alert("TRACKER-A"),
  },
},

// ==========================
// RM-A
// ==========================
{
  id: "rmA",
  type: "buttonNode",
  position: { x: 420, y: 1140 },
  data: {
    label: "RM-A",
    onClick: () => alert("RM-A"),
  },
},

// ==========================
// RC-B
// ==========================
{
  id: "rcB",
  type: "buttonNode",
  position: { x: 820, y: 720 },
  data: {
    label: "RC-B",
    disabled: true,
    onClick: () => alert("RC-B"),
  },
},

// ==========================
// CENTROIDER-B
// ==========================
{
  id: "centroiderB",
  type: "buttonNode",
  position: { x: 820, y: 860 },
  data: {
    label: "CENTROIDER-B",
    disabled: true,
    onClick: () => alert("CENTROIDER-B"),
  },
},

// ==========================
// TRACKER-B
// ==========================
{
  id: "trackerB",
  type: "buttonNode",
  position: { x: 820, y: 1000 },
  data: {
    label: "TRACKER-B",
    disabled: true,
    onClick: () => alert("TRACKER-B"),
  },
},

// ==========================
// RM-B
// ==========================
{
  id: "rmB",
  type: "buttonNode",
  position: { x: 820, y: 1140 },
  data: {
    label: "RM-B",
    disabled: true,
    onClick: () => alert("RM-B"),
  },
},

];