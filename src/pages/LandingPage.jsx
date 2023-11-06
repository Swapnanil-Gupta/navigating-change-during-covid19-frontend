import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to
          <br />
          Navigating Change During COVID-19
        </h1>
        <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          US Economy, Healthcare and Environmental Analysis
        </h2>
        <div className="flex justify-center mt-8 space-x-4">
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
