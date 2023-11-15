import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="max-w-4xl mx-auto flex flex-col gap-y-8 text-center">
        <h1 className="font-extrabold tracking-tight text-5xl">
          Welcome to
          <br />
          Navigating Change During COVID-19
        </h1>
        <h2 className="text-3xl font-semibold tracking-tight">
          US Economy, Healthcare and Environmental Analysis
        </h2>
        <div className="flex justify-center gap-x-4">
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </main>
  );
}
