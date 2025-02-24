"use client";
import React from "react";
import Button from "../ui/moving-border";

function MovingBorderDemo({name}) {
  return (
    (<div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black/[0.96] text-black dark:text-white border-neutral-200 dark:border-slate-800">
        {name}
      </Button>
    </div>)
  );
}

export default MovingBorderDemo