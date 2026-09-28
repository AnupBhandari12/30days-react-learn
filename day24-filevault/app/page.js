import { readdir, stat } from "fs/promises";
import path from "path";


import UploadForm from "./components/UploadForm";
import { deleteFile } from "./actions";

async function getUploadedFiles() {
  const uploadDirectory = path.join(
    process.cwd(),
    "public",
    "uploads"
  );

  const filesNames = await readdir(uploadDirectory);

  const files = await Promise.all(
    filesNames.map(async (fileName) => {
      const filePath = path.join(
        uploadDirectory,
        fileName
      );

      const fileInfo = await stat(filePath);

      return {
        name: fileName,
        size: fileInfo.size,
        uploadedAt: fileInfo.mtime,
        url: `/uploads/${fileName}`,
      };
    })
  )

  return files.sort(
    (a, b) => b.uploadedAt - a.uploadedAt
  );
}

export default async function Home() {

  const files = await getUploadedFiles();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl p-6">
        <h1 className="text-3xl font-bold">
          fileVault
        </h1>

        <p className="mt-2 text-gray-600">
          Upload and manage your files
        </p>

        <UploadForm />
        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Uploaded files ({files.length})
          </h2>

          <div className="space-y">
            {files.map((file) => (
              <div key={file.name}
                className="rounded-xl border bg-white p-4 shadow-sm">

                <p className="mt-1 text-sm text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
                <a href={file.url}
                  target="bank"
                  className="mt-3 inline-block text-sm underline" >
                  View File
                </a>

                <form action={deleteFile} className="mt-3">
                  <input
                    type="hidden"
                    name="fileName"
                    value={file.name}
                  />

                  <button
                    type="submit"
                    className="text-sm font-medium text-red-600"
                  >
                    Delete
                  </button>
                </form>

              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}