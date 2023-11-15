import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="py-4 border-b-2 border-neutral-200">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-x-6 font-semibold">
          <li>
            <NavLink
              end
              to="/app"
              className={({ isActive }) =>
                isActive ? "text-foreground" : "text-foreground/60"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/app/emissions"
              className={({ isActive }) =>
                isActive ? "text-foreground" : "text-foreground/60"
              }
            >
              Emissions
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/app/business-establishments"
              className={({ isActive }) =>
                isActive ? "text-foreground" : "text-foreground/60"
              }
            >
              Business Establishments
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/app/payroll"
              className={({ isActive }) =>
                isActive ? "text-foreground" : "text-foreground/60"
              }
            >
              Payroll
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/app/entrepreneurship"
              className={({ isActive }) =>
                isActive ? "text-foreground" : "text-foreground/60"
              }
            >
              Entrepreneurship
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/app/tax-revenue"
              className={({ isActive }) =>
                isActive ? "text-foreground" : "text-foreground/60"
              }
            >
              Tax Revenue
            </NavLink>
          </li>
        </ul>
        <Button>Log out</Button>
      </div>
    </header>
  );
}
