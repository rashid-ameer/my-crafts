import { cn } from "@/lib/utils";
import { ChevronRight, FileIcon, FolderClosed, FolderOpen } from "lucide-react";
import { useState } from "react";

type Item = {
  id: string;
  name: string;
  type: string;
  path?: string;
  isOpen?: boolean;
  items?: Item[];
};

type Props = {
  items: Item[];
};

function FileExplorerNav({ items }: Props) {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {};
      function traverse(items: Item[]) {
        items.forEach((item) => {
          if (item.items && item.items.length > 0) {
            initialState[item.id] = !!item.isOpen;
            traverse(item.items);
          }
        });
      }
      traverse(items);
      return initialState;
    }
  );

  function toggleFolder(id: string) {
    setOpenFolders((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  function renderItem(item: Item, level = 0) {
    const isOpen = openFolders[item.id];
    const hasItems = item.items && item.items.length > 0;

    return (
      <div className="relative">
        <button
          className={cn(
            "flex items-center py-1.5 pr-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer text-sm gap-2 w-full focus:outline-none focus-visible:bg-gray-800",
            {
              "text-white": isOpen,
            }
          )}
          onClick={() => {
            if (hasItems) {
              toggleFolder(item.id);
            }
          }}
          style={{ paddingLeft: `${(level + 1) * 12}px` }}>
          {hasItems ? (
            <div className="flex gap-2">
              <ChevronRight
                className={cn("size-4 transition-transform", {
                  "rotate-90": isOpen,
                })}
              />
              {isOpen ? (
                <FolderOpen className="size-4" />
              ) : (
                <FolderClosed className="size-4" />
              )}
            </div>
          ) : (
            <FileIcon className="ml-2.5 size-4" />
          )}
          <span>{item.name}</span>
          {item.path && <span className="text-xs ml-auto">{item.path}</span>}
        </button>

        {isOpen && hasItems && (
          <div className="relative">
            {item.items?.map((subItem) => renderItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-72 border border-white/10 rounded-sm bg-gray-900 p-2 flex flex-col gap-2">
      {items.map((item) => renderItem(item))}
    </div>
  );
}
export default FileExplorerNav;
