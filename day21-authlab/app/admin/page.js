import { getCurrentUser } from "../../lib/session";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    if (user.role !== 'ADMIN') {
        redirect("/dashboard");
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl p-6">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-bold">
                        Admin Dashboard
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Welcome, {user.name}
                    </p>

                    <p className="mt-4">
                        Role: <strong>{user.role}</strong>
                    </p>
                </div>
            </div>
        </main>
    )
}