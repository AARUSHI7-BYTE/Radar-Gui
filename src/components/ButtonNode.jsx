import { Handle, Position } from "reactflow";

export default function ButtonNode({ data }) {
  return (
    <div className="relative">

      {/* TOP */}
      <Handle
        type="target"
        id="top-in"
        position={Position.Top}
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        id="top-out"
        position={Position.Top}
        style={{ opacity: 0 }}
      />

      {/* BOTTOM */}
      <Handle
        type="target"
        id="bottom-in"
        position={Position.Bottom}
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        id="bottom-out"
        position={Position.Bottom}
        style={{ opacity: 0 }}
      />

      {/* LEFT */}
      <Handle
        type="target"
        id="left-in"
        position={Position.Left}
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        id="left-out"
        position={Position.Left}
        style={{ opacity: 0 }}
      />

      {/* RIGHT */}
      <Handle
        type="target"
        id="right-in"
        position={Position.Right}
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        id="right-out"
        position={Position.Right}
        style={{ opacity: 0 }}
      />

      <button
        onClick={data.onClick}
        className={`w-28 h-12 rounded-lg font-bold text-white shadow-md border ${
          data.disabled
            ? "bg-gray-300 border-gray-400"
            : "bg-slate-800 border-slate-600 hover:bg-slate-700"
        }`}
      >
        {data.label}
      </button>
    </div>
  );
}