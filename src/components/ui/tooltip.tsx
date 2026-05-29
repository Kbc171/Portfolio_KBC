"use client";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  arrow,
} from "@floating-ui/react";
import { useState, useRef } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ content, children, placement = "top" }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "start" }),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
    placement,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover, focus, dismiss, role,
  ]);

  const arrowX = middlewareData.arrow?.x ?? null;
  const arrowY = middlewareData.arrow?.y ?? null;
  const staticSide =
    placement === "top" ? "bottom" :
    placement === "bottom" ? "top" :
    placement === "left" ? "right" : "left";

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </span>
      <FloatingPortal>
        {open && (
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex: 9999 }}
            {...getFloatingProps()}
            className="tooltip-base"
          >
            {content}
            <div
              ref={arrowRef}
              className="tooltip-arrow"
              style={{
                position: "absolute",
                left: arrowX != null ? `${arrowX}px` : "",
                top: arrowY != null ? `${arrowY}px` : "",
                [staticSide]: "-5px",
              }}
            />
          </div>
        )}
      </FloatingPortal>
    </>
  );
}

// ── Tag with tooltip ──────────────────────────────────────
interface TagTooltipProps {
  label: string;
  description?: string;
}

export function TagWithTooltip({ label, description }: TagTooltipProps) {
  if (!description) {
    return <span className="tag">{label}</span>;
  }
  return (
    <Tooltip content={description}>
      <span className="tag" style={{ cursor: "none" }}>{label}</span>
    </Tooltip>
  );
}
