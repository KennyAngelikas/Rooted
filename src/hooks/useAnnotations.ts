import { useCallback, useState } from "react";

export type AnnotationType = "box" | "note";

export interface AnnotationEntity {
  id: string;
  type: AnnotationType;
  position: { x: number; y: number };
  width: number;
  height: number;
  color: string;
  label?: string;
  text?: string;
}

export function useAnnotations() {
  const [annotations, setAnnotations] = useState<AnnotationEntity[]>([]);

  const deleteAnnotation = useCallback((id: string) => {
    setAnnotations((current) => current.filter((item) => item.id !== id));
  }, []);

  const updateAnnotation = useCallback(
    (
      id: string,
      patch: Partial<Pick<AnnotationEntity, "label" | "text" | "color" | "width" | "height" | "position">>
    ) => {
      setAnnotations((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
    },
    []
  );

  const addBox = useCallback(() => {
    const id = `box-${Date.now()}`;
    setAnnotations((current) => [
      ...current,
      {
        id,
        type: "box",
        position: { x: 0, y: 0 },
        width: 400,
        height: 300,
        color: "#93c5fd",
        label: "New Category",
      },
    ]);
  }, []);

  const addNote = useCallback(() => {
    const id = `note-${Date.now()}`;
    setAnnotations((current) => [
      ...current,
      {
        id,
        type: "note",
        position: { x: 0, y: 0 },
        width: 200,
        height: 200,
        color: "#fef08a",
        text: "Type here...",
      },
    ]);
  }, []);

  return {
    annotations,
    addBox,
    addNote,
    deleteAnnotation,
    updateAnnotation,
  } as const;
}
