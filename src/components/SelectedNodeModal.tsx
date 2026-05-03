import { motion } from "motion/react";
import { Resizable } from "re-resizable";
import { X } from "lucide-react";
import { DiscussionNodeData } from "../types/discussion";

interface SelectedNodeModalProps {
    selectedNode: DiscussionNodeData;
    onClose: () => void;
}

export function SelectedNodeModal({ selectedNode, onClose }: SelectedNodeModalProps) {
    return (
        <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
            style={{ pointerEvents: "auto" }}
        >
            <Resizable
                defaultSize={{
                    width: 600,
                    height: 400,
                }}
                minWidth={400}
                minHeight={300}
                maxWidth={1000}
                maxHeight={800}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 cursor-move">
                        <div className="flex items-center gap-2">
                            <div
                                className={`px-4 py-2 rounded-full ${selectedNode.isOriginalPost
                                        ? "bg-orange-100 text-orange-800"
                                        : selectedNode.isSemanticSummary
                                            ? "bg-violet-100 text-violet-800"
                                            : "bg-blue-100 text-blue-800"
                                    }`}
                            >
                                <span className="text-xs tracking-wide" style={{ fontFamily: "DM Sans, sans-serif" }}>
                                    {selectedNode.isOriginalPost
                                        ? "ORIGINAL POST"
                                        : selectedNode.isSemanticSummary
                                            ? "AI SUMMARY"
                                            : "COMMENT"}{" "}
                                    · {selectedNode.upvotes} upvotes
                                </span>
                            </div>
                            {selectedNode.isDelta && (
                                <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                                    <span className="text-xs font-semibold tracking-wide" style={{ fontFamily: "DM Sans, sans-serif" }}>
                                        Δ CHANGED OP&apos;S MIND
                                    </span>
                                </div>
                            )}
                            {selectedNode.isSemanticSummary && selectedNode.representedCount ? (
                                <div className="px-3 py-1 rounded-full bg-violet-50 text-violet-700">
                                    <span className="text-xs font-semibold tracking-wide" style={{ fontFamily: "DM Sans, sans-serif" }}>
                                        {selectedNode.representedCount} comments grouped
                                    </span>
                                </div>
                            ) : null}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6">
                        <h3 className="text-3xl mb-4 text-gray-900" style={{ fontFamily: "Crimson Text, serif" }}>
                            {selectedNode.label}
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            {selectedNode.fullText}
                        </p>
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            Drag header to move · Drag corners to resize
                        </p>
                    </div>
                </div>
            </Resizable>
        </motion.div>
    );
}
