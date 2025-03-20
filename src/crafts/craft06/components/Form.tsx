import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function Form() {
  return (
    <form className="w-full">
      <div className="relative mx-2">
        <Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 select-none pointer-events-none" />
        <Input className="pl-8" type="search" placeholder="Search..." />
      </div>
    </form>
  );
}
export default Form;
