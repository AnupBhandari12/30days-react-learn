import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-md p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Login
          </h1>

          <p className="mt-1 text-gray-600">
            Sign in to your account
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}