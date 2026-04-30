import { useCallback } from "react";

interface UseFiltersProps {
  depthFilter: number | null;
  setDepthFilter: (value: number | null) => void;
  upvoteFilter: number;
  setUpvoteFilter: (value: number) => void;
  highlightDelta: boolean;
  setHighlightDelta: (value: boolean) => void;
}

export function useFilters({
  depthFilter,
  setDepthFilter,
  upvoteFilter,
  setUpvoteFilter,
  highlightDelta,
  setHighlightDelta,
}: UseFiltersProps) {
  const resetFilters = useCallback(() => {
    setDepthFilter(null);
    setUpvoteFilter(0);
    setHighlightDelta(true);
  }, [setDepthFilter, setUpvoteFilter, setHighlightDelta]);

  return {
    depthFilter,
    setDepthFilter,
    upvoteFilter,
    setUpvoteFilter,
    highlightDelta,
    setHighlightDelta,
    resetFilters,
  } as const;
}
