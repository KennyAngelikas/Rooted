import { motion } from "motion/react";
import { List, X } from "lucide-react";
import { Discussion } from "../types/discussion";
import { DiscussionPanel } from "./DiscussionPanel";
import { FilterPanel } from "./FilterPanel";
import { VisualizationActions } from "./VisualizationActions";

interface SidebarProps {
  // Discussion Panel Props
  discussions: Discussion[];
  selectedDiscussionIds: string[];
  isDiscussionPanelOpen: boolean;
  onToggleDiscussionPanel: () => void;
  onDiscussionToggle: (discussionId: string, checked: boolean) => void;

  // Filter Panel Props
  isPanelExpanded: boolean;
  onToggleFilterExpanded: () => void;
  depthFilter: number | null;
  onDepthFilterChange: (value: number | null) => void;
  upvoteFilter: number;
  onUpvoteFilterChange: (value: number) => void;
  highlightDelta: boolean;
  onHighlightDeltaChange: (value: boolean) => void;
  onResetFilters: () => void;

  // Visualization Actions Props
  selectionMode: boolean;
  onToggleSelectionMode: () => void;
  onAddBox: () => void;
  onAddNote: () => void;
}

export function Sidebar({
  // Discussion
  discussions,
  selectedDiscussionIds,
  isDiscussionPanelOpen,
  onToggleDiscussionPanel,
  onDiscussionToggle,
  // Filter
  isPanelExpanded,
  onToggleFilterExpanded,
  depthFilter,
  onDepthFilterChange,
  upvoteFilter,
  onUpvoteFilterChange,
  highlightDelta,
  onHighlightDeltaChange,
  onResetFilters,
  // Actions
  selectionMode,
  onToggleSelectionMode,
  onAddBox,
  onAddNote,
}: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-screen w-80 bg-white/95 backdrop-blur-sm shadow-xl overflow-y-auto z-40"
    >
      {/* Header with Close Button */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800" style={{ fontFamily: "Crimson Text, serif" }}>
          Controls
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Discussion Panel */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Arguments</h3>
          </div>
          <div className="max-h-64 overflow-y-auto space-y-2">
            {discussions.map((discussion) => (
              <label key={discussion.id} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={selectedDiscussionIds.includes(discussion.id)}
                  onChange={(e) => onDiscussionToggle(discussion.id, e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">{discussion.title}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filter Panel */}
        <div className="border-b border-gray-200 pb-4">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Filters</h3>
            
            {/* Depth Filter */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 block mb-2">Depth</label>
              <select
                value={depthFilter ?? ""}
                onChange={(e) => onDepthFilterChange(e.target.value ? parseInt(e.target.value) : null)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="">All Depths</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((depth) => (
                  <option key={depth} value={depth}>
                    {depth}
                  </option>
                ))}
              </select>
            </div>

            {/* Upvote Filter */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 block mb-2">
                Upvote % ({upvoteFilter})
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={upvoteFilter}
                onChange={(e) => onUpvoteFilterChange(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Highlight Delta */}
            <div className="mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={highlightDelta}
                  onChange={(e) => onHighlightDeltaChange(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">Highlight Delta</span>
              </label>
            </div>

            {/* Reset Button */}
            <button
              onClick={onResetFilters}
              className="w-full px-3 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Visualization Actions */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Actions</h3>
          
          <button
            onClick={onToggleSelectionMode}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
              selectionMode
                ? "bg-orange-600 text-white hover:bg-orange-700"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {selectionMode ? "Selection Mode ON" : "Select Multiple"}
          </button>

          <button
            onClick={onAddBox}
            className="w-full px-3 py-2 bg-blue-100 text-blue-800 rounded text-sm font-medium hover:bg-blue-200 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Add Box
          </button>

          <button
            onClick={onAddNote}
            className="w-full px-3 py-2 bg-yellow-100 text-yellow-800 rounded text-sm font-medium hover:bg-yellow-200 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Add Note
          </button>
        </div>
      </div>
    </motion.div>
  );
}