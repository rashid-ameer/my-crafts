import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";
function VersionSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data:[state=open]:bg-sidebar-accent data:[state=open]:text-sidebar-accent-foreground cursor-pointer">
          <div className="size-8 bg-blue-500 flex items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>

          <div className="flex flex-col leading-none gap-0.5">
            <h2 className="font-medium">Documentation</h2>
            <p>v1.0.1</p>
          </div>

          <div className="ml-auto">
            <ChevronsUpDown className="size-4" />
          </div>
        </SidebarMenuButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
        align="start">
        <DropdownMenuItem>
          <span>v1.0.1</span>
          <Check className="ml-auto" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>v1.0.1-alpha</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>v2.0.0</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default VersionSwitcher;
