export interface ISidebarMenuItem {
  label: string;
  url?: string;
  items: ISidebarMenuItem[];

  isCollapsed: boolean;
  isEnabled: boolean;
  isActive: boolean;
}
