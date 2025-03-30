"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

interface CustomTooltipProps {
    text: string;
    children: React.ReactNode;
    delay?: number
}

export function CustomTooltip({ text, children, delay = 150 }: CustomTooltipProps) {
    return (
        <TooltipProvider delayDuration={delay}>
            <Tooltip >
                <TooltipTrigger asChild >{children}</TooltipTrigger>
                <TooltipContent>{text}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
