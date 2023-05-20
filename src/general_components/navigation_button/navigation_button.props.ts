type NavButtonType = "next" | "previous";

export interface NavigationButtonProps {
	type: NavButtonType;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}
