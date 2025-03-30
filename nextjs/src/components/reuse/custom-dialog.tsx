"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CustomDialogProps {
    title: string;
    description?: string;
    trigger?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

export function CustomDialog({
    title,
    description,
    trigger,
    children,
    footer
}: CustomDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger ? trigger : <Button variant="outline">Open Dialog</Button>}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <div>{children}</div>
                {footer && <DialogFooter> {footer} </DialogFooter>}
            </DialogContent>
        </Dialog>
    );
}
