import { motion } from "motion/react";
import { X, List } from "lucide-react";
import { Discussion } from "../types/discussion";

interface DiscussionPanelProps {
    discussions: Discussion[];
    selectedDiscussionIds: string[];
    isOpen: boolean;
    onToggleOpen: () => void;
    onDiscussionToggle: (discussionId: string, checked: boolean) => void;
}

export function DiscussionPanel({
    discussions,
    selectedDiscussionIds,
    isOpen,
    onToggleOpen,
    onDiscussionToggle,
}: DiscussionPanelProps) {
    if (!isOpen) {
        return (
            <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={onToggleOpen}
                className="bg-white/90 backdrop-blur-sm rounded-r-lg shadow-lg p-3 hover:bg-white transition-colors"
                title="Show discussions"
            >
                <List className="w-6 h-6 text-orange-600" />
            </motion.button>
        );
    }

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 w-80 max-h-[70vh] overflow-y-auto"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: "Crimson Text, serif" }}>
                    Arguments
                </h3>
                <button
                    onClick={onToggleOpen}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    title="Hide panel"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="space-y-2">
                {discussions.map((discussion) => {
                    const isChecked = selectedDiscussionIds.includes(discussion.id);
                    return (
                        <label
                            key={discussion.id}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isChecked
                                    ? "bg-orange-100 border-2 border-orange-600"
                                    : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(event) => onDiscussionToggle(discussion.id, event.target.checked)}
                                className="w-4 h-4 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                            />
                            <span
                                className={`text-sm flex-1 ${isChecked ? "font-semibold text-orange-800" : "text-gray-700"}`}
                                style={{ fontFamily: "DM Sans, sans-serif" }}
                            >
                                {discussion.title}
                            </span>
                        </label>
                    );
                })}
            </div>
        </motion.div>
    );
}
