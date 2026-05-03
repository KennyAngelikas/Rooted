import { Link } from "react-router-dom";
import { Panel } from "reactflow";
import { FilterPanel } from "./FilterPanel";
import { VisualizationActions } from "./VisualizationActions";

interface ControlPanelsProps {
    isPanelExpanded: boolean;
    onToggleFilterExpanded: () => void;
    depthFilter: number | null;
    onDepthFilterChange: (value: number | null) => void;
    upvoteFilter: number;
    onUpvoteFilterChange: (value: number) => void;
    highlightDelta: boolean;
    onHighlightDeltaChange: (value: boolean) => void;
    onResetFilters: () => void;
    selectionMode: boolean;
    onToggleSelectionMode: () => void;
    onAddBox: () => void;
    onAddNote: () => void;
}

export function ControlPanels({
    isPanelExpanded,
    onToggleFilterExpanded,
    depthFilter,
    onDepthFilterChange,
    upvoteFilter,
    onUpvoteFilterChange,
    highlightDelta,
    onHighlightDeltaChange,
    onResetFilters,
    selectionMode,
    onToggleSelectionMode,
    onAddBox,
    onAddNote,
}: ControlPanelsProps) {
    return (
        <>
            <Panel position="top-left" className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 m-4">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                    Home
                </Link>
            </Panel>

            <Panel position="top-right" className="m-4 flex flex-col gap-4 items-end">
                <FilterPanel
                    isPanelExpanded={isPanelExpanded}
                    onToggleExpanded={onToggleFilterExpanded}
                    depthFilter={depthFilter}
                    onDepthFilterChange={onDepthFilterChange}
                    upvoteFilter={upvoteFilter}
                    onUpvoteFilterChange={onUpvoteFilterChange}
                    highlightDelta={highlightDelta}
                    onHighlightDeltaChange={onHighlightDeltaChange}
                    onResetFilters={onResetFilters}
                />
            </Panel>

            <Panel position="bottom-center" className="m-4">
                <VisualizationActions
                    selectionMode={selectionMode}
                    onToggleSelectionMode={onToggleSelectionMode}
                    onAddBox={onAddBox}
                    onAddNote={onAddNote}
                />
            </Panel>
        </>
    );
}