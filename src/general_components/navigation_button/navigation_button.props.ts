type NavButtonType = "next" | "previous";
export type NavButtonStatus = "enabled" | "disabled";

export interface NavigationButtonProps {
    type: NavButtonType;
    status: NavButtonStatus;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
