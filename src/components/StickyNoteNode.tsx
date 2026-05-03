import { NodeProps, NodeResizer } from "reactflow";
import { X } from "lucide-react";

export function StickyNoteNode({ data, id }: NodeProps) {
    return (
        <div
            style={{
                width: data.width || 200,
                height: data.height || 200,
                backgroundColor: data.color || "#fef08a",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                padding: "12px",
                zIndex: 1,
            }}
            className="flex flex-col"
        >
            <div className="flex items-center justify-between mb-2">
                <input
                    type="color"
                    value={data.color}
                    onChange={(e) => data.onColorChange?.(id, e.target.value)}
                    className="w-5 h-5 rounded cursor-pointer"
                    title="Change color"
                />
                <button
                    onClick={() => data.onDelete?.(id)}
                    className="p-1 hover:bg-black/10 rounded transition-colors"
                    title="Delete note"
                >
                    <X className="w-4 h-4 text-gray-700" />
                </button>
            </div>
            <textarea
                value={data.text}
                onChange={(e) => data.onTextChange?.(id, e.target.value)}
                placeholder="Type your note here..."
                className="flex-1 bg-transparent resize-none outline-none text-sm text-gray-800 placeholder-gray-500"
                style={{ fontFamily: "Indie Flower, cursive" }}
            />
            <NodeResizer
                isVisible={true}
                lineClassName="resize-line"
                handleClassName="resize-handle"
            />
        </div>
    );
}
