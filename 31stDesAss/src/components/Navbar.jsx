
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Navbar({ filter, setFilter }) {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
      <h1 className="text-xl font-bold">Todos App</h1>

      <div className="flex gap-4">
        <Button
          variant={filter === "all" ? "default" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "secondary"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </div>

      {user && (
        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      )}
    </nav>
  );
}
