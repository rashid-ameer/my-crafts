import { SidebarProvider, } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-black text-gray-300">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <MainContent />
        </main>
      </SidebarProvider>
    </div>
  );
}
export default App;
