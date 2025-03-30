
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CustomAvatarProps {
    src?: string; // Image URL
    alt?: string; // Alt text
    fallback?: string; // Fallback initials or emoji
    className?: string; // Custom className (Tailwind classes)
}

export function CustomAvatar({ src, alt = "User Avatar", fallback = "👤", className = "w-12 h-12" }: CustomAvatarProps) {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
}
