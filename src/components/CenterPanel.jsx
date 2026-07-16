
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { edges } from "./edges";

import ButtonNode from "./ButtonNode";
import LabelNode from "./LabelNode";

import { nodes} from "./nodes";

const defaultEdgeOptions = {
  type: "step",
  animated: false,
  style: {
    stroke: "#000",
    strokeWidth: 2,
  },
};

const nodeTypes = {
  buttonNode: ButtonNode,
  labelNode: LabelNode,
};

export default function CenterPanel() {
  return (
    <div className="flex-1 bg-gray-200 p-4">

      {/* White Radar Canvas */}
      <div className="w-full h-full bg-white rounded-xl shadow-xl border-2 border-gray-300 overflow-hidden">

            <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView={false}
          defaultViewport={{
            x: 80,
            y: 20,
            zoom: 0.58,
          }}
          panOnDrag={false}
          zoomOnScroll={true}
          zoomOnPinch={true}
          zoomOnDoubleClick={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          proOptions={{ hideAttribution: true }}
        >


          {/* Background */}
          

        </ReactFlow>

      </div>

    </div>
  );
}

