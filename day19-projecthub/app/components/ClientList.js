export default function ClientList({ clients }) {
    if (clients.length === 0) {
        return (
            <p className="text-gray-500">
                No clients found.
            </p>
        );
    }

    return (
        <section>
            <h2 className="mb-4 text-xl font-semibold">
                Clients
            </h2>

            <div className="space-y-4">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="rounded-xl border bg-white p-5 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold">
                            {client.name}
                        </h3>

                        <p className="text-sm text-gray-600">
                            {client.company || "No company"}
                        </p>

                        <div className="mt-3 space-y-1 text-sm">
                            <p>Email: {client.email || "N/A"}</p>
                            <p>Phone: {client.phone || "N/A"}</p>
                        </div>
                        <div className="mt-4">
                            <p className="mb-2 font-medium">
                                Projects ({client.projects.length})
                            </p>

                            {client.projects.length === 0 ? (
                                <p className="text-sm text-gray-500">
                                    No projects yet.
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {client.projects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="rounded-lg bg-gray-50 p-3"
                                        >
                                            <p className="font-medium">
                                                {project.title}
                                            </p>

                                            <p className="text-sm text-gray-600">
                                                Status: {project.status}
                                            </p>

                                            <p className="text-sm text-gray-600">
                                                Budget:{" "}
                                                {project.budget
                                                    ? `Rs. ${project.budget.toLocaleString()}`
                                                    : "Not specified"}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}