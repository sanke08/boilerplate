"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

interface CustomCardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string
}

export function CustomCard({ title, description, children, footer, className }: CustomCardProps) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>{children}</CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
}
