"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    id: string;
    isTextarea?: boolean;
}

export function CustomInput({ label, id, isTextarea = false, ...props }: CustomInputProps) {
    return (
        <div className="flex flex-col space-y-2">
            {label && <Label htmlFor={id}>{label}</Label>}
            {isTextarea ? (
                <Textarea id={id} {...props} />
            ) : (
                <Input id={id} {...props} />
            )}
        </div>
    );
}
