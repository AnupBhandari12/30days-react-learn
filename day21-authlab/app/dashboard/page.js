import { getCurrentUser } from "../../lib/session";
import { redirect } from "next/navigation";
import { logoutUser } from "../actions";

export default async function DashboardPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login")
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl p-6">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Welcome back, {user.name}
                    </p>

                    <div className="mt-6 space-y-2">
                        <p>
                            <strong>User ID:</strong> {user.id}
                        </p>

                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                </div>
            </div>

            
        <form action={logoutUser} className="mt-6">
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Logout
          </button>
        </form>
        </main>
    )
}