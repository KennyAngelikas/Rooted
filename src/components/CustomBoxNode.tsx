import { useState } from "react";
import { NodeProps, NodeResizer } from "reactflow";
import { X } from "lucide-react";

export function CustomBoxNode({ data, id }: NodeProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      style={{
        width: data.width || 400,
        height: data.height || 300,
        backgroundColor: (data.color || "#93c5fd") + "40",
        border: `3px solid ${data.color || "#93c5fd"}`,
        borderRadius: "12px",
        padding: "8px",
        zIndex: -1,
      }}
      className="flex flex-col"
    >
      <div className="flex items-center justify-between mb-2">
        {isEditing ? (
          <input
            type="text"
            value={data.label}
            onChange={(e) => data.onLabelChange?.(id, e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
            autoFocus
            className="px-2 py-1 bg-white rounded border-2 border-gray-300 flex-1 mr-2"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          />
        ) : (
          <h3
            onClick={() => setIsEditing(true)}
            className="font-semibold text-gray-800 flex-1 cursor-text px-2 py-1"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {data.label}
          </h3>
        )}
        <div className="flex items-center gap-1">
          <input
            type="color"
            value={data.color}
            onChange={(e) => data.onColorChange?.(id, e.target.value)}
            className="w-6 h-6 rounded cursor-pointer"
            title="Change color"
          />
          <button
            onClick={() => data.onDelete?.(id)}
            className="p-1 hover:bg-white/50 rounded transition-colors"
            title="Delete box"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex-1 text-xs text-gray-600 px-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
        Drag nodes here to organize
      </div>
      <NodeResizer
        isVisible={true}
        lineClassName="resize-line"
        handleClassName="resize-handle"
      />
    </div>
  );
}
