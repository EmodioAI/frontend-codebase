export type BoxPosition = "up" | "down";

export interface NotificationProps {
    status: boolean;
    message: string;
    state: "success" | "error" | null;
}
