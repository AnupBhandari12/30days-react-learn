import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-md p-6">
                <h1 className="text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mt-2 text-gray-600">
                    Register to use AI Workspace
                </p>

                <div className="mt-8">
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}