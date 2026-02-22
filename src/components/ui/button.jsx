import React from "react";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default:
        "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_10px_30px_rgba(34,211,238,0.25)]",
      outline:
        "border border-slate-600/90 bg-slate-950/40 text-slate-100 hover:border-cyan-300 hover:text-cyan-100",
      ghost: "text-slate-200 hover:bg-slate-800/60",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md text-sm font-black uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
