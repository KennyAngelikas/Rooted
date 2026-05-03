import { Square, StickyNote, MousePointer2 } from "lucide-react";
import { motion } from "motion/react";

interface VisualizationActionsProps {
    selectionMode: boolean;
    onToggleSelectionMode: () => void;
    onAddBox: () => void;
    onAddNote: () => void;
}

export function VisualizationActions({
    selectionMode,
    onToggleSelectionMode,
    onAddBox,
    onAddNote,
}: VisualizationActionsProps) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex gap-2"
        >
            <button
                onClick={onToggleSelectionMode}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${selectionMode
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
                title="Toggle selection mode to select and move multiple nodes"
            >
                <MousePointer2 className="w-4 h-4" />
                <span>{selectionMode ? "Selection Mode ON" : "Select Multiple"}</span>
            </button>

            <button
                onClick={onAddBox}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
            >
                <Square className="w-4 h-4" />
                <span>Add Box</span>
            </button>

            <button
                onClick={onAddNote}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
            >
                <StickyNote className="w-4 h-4" />
                <span>Add Sticky Note</span>
            </button>
        </motion.div>
    );
}
