import RegisterForm from "./components/RegisterForm";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-md p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-1 text-gray-600">
            Day 21 Authentication Lab
          </p>
        </div>

        <RegisterForm />

      </div>

    </main>
  )
}