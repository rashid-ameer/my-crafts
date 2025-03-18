import { fileStructure } from "./content";
import FileExplorerNav from "./FileExplorerNav";

function NextJsDocSidebar() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black p-8 text-gray-400">
      <FileExplorerNav items={fileStructure} />
    </div>
  );
}
export default NextJsDocSidebar;
