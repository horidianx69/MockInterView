import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import NavigationRoutes from "./navigation-routes";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react"
import { NavLink } from "react-router-dom";


const ToggleContainer = () => {
  const { userId } = useAuth();
  return (
    <Sheet>
      <SheetTrigger><Menu className="block md:hidden"/></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mockery💕</SheetTitle>
          <SheetDescription>
            Prepping made easy, anywhere you go.
          </SheetDescription>
        </SheetHeader>
         <NavigationRoutes isMobile={true} />
          {userId && <NavLink to="/dashboard" className={({isActive})=>cn("text-base text-neutral-600",isActive && "text-neutral-900 font-semibold")}>Begin Interview</NavLink>}
      </SheetContent>
    </Sheet>
  );
}

export default ToggleContainer;
  