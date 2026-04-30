import { motion } from "motion/react";
import { ChevronUp } from "lucide-react";

interface FilterPanelProps {
  isPanelExpanded: boolean;
  onToggleExpanded: () => void;
  depthFilter: number | null;
  onDepthFilterChange: (value: number | null) => void;
  upvoteFilter: number;
  onUpvoteFilterChange: (value: number) => void;
  highlightDelta: boolean;
  onHighlightDeltaChange: (value: boolean) => void;
  onResetFilters: () => void;
}

export function FilterPanel({
  isPanelExpanded,
  onToggleExpanded,
  depthFilter,
  onDepthFilterChange,
  upvoteFilter,
  onUpvoteFilterChange,
  highlightDelta,
  onHighlightDeltaChange,
  onResetFilters,
}: FilterPanelProps) {
  if (!isPanelExpanded) {
    return (
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={onToggleExpanded}
        className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 hover:bg-white transition-colors"
        title="Show legend"
      >
        <ChevronUp className="w-6 h-6 text-orange-600" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md"
    >
      <div className="flex items-start justify-between mb-2">
        <h2 className="text-2xl" style={{ fontFamily: "Crimson Text, serif" }}>
          Argument Map
        </h2>
        <button
          onClick={onToggleExpanded}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          title="Hide legend"
        >
          <ChevronUp className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
        Click once to view. Double-click to expand replies. Drag to rearrange.
      </p>
      <div className="space-y-2 text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-600"></div>
          <span className="text-gray-700">Original Post</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500"></div>
          <span className="text-gray-700">Comments</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-purple-500"></div>
          <span className="text-gray-700">Delta (Changed OP's Mind)</span>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <div>
          <label className="block text-gray-700 mb-2">Comment Depth</label>
          <select
            value={depthFilter ?? "all"}
            onChange={(event) => {
              const value = event.target.value === "all" ? null : Number(event.target.value);
              onDepthFilterChange(value);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All levels</option>
            <option value="1">First-level only</option>
            <option value="2">Up to 2nd level</option>
            <option value="3">Up to 3rd level</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Minimum Upvotes: {upvoteFilter}% of the OP&apos;s</label>
          <input
            type="range"
            min="0"
            max="200"
            step="1"
            value={upvoteFilter}
            onChange={(event) => onUpvoteFilterChange(Number(event.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Delta Show</label>
          <input
            type="checkbox"
            checked={highlightDelta}
            onChange={(event) => onHighlightDeltaChange(event.target.checked)}
            className="mr-2"
          />
        </div>

        <button
          onClick={onResetFilters}
          className="w-full px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </motion.div>
  );
}
