import { Handle, Position } from "reactflow";

function LabelNode({ data }) {
  return (
    <div className="flex flex-col items-center text-black select-none relative">

      <div
        className={
          data.label === "RADAR BLOCK"
            ? "text-3xl font-bold"
            : "text-lg font-semibold"
        }
      >
        {data.label}
      </div>

      {data.subLabel && (
        <div className="text-xs text-gray-600 mt-1">
          {data.subLabel}
        </div>
      )}

      {/* TOP */}
      <Handle
        type="target"
        position={Position.Top}
        id="top-target"
        style={{ opacity: 0 }}
      />

      <Handle
        type="source"
        position={Position.Top}
        id="top-source"
        style={{ opacity: 0 }}
      />

      {/* BOTTOM */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        style={{ opacity: 0 }}
      />

      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-target"
        style={{ opacity: 0 }}
      />

      {/* LEFT */}
      <Handle
        type="source"
        position={Position.Left}
        id="left-source"
        style={{ opacity: 0 }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        style={{ opacity: 0 }}
      />

      {/* RIGHT */}
      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        style={{ opacity: 0 }}
      />

      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        style={{ opacity: 0 }}
      />
    </div>
  );
}

export default LabelNode;