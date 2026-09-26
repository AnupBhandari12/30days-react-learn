export default function CustomerList({ customers }) {
  if (customers.length === 0) {
    return (
      <p className="text-gray-500">
        No customers found.
      </p>
    );
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">
        Customers
      </h2>

      <div className="space-y-3">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <h3 className="font-semibold">
              {customer.name}
            </h3>

            <p className="text-sm text-gray-600">
              {customer.email}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}