export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C7A86D]">
            EDNEXA
          </p>

          <h1 className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-[#111111]">
            Lead Dashboard
          </h1>

          <p className="mt-4 text-neutral-600">
            The enquiry dashboard is currently being configured.
          </p>
        </div>

        <div className="rounded-[30px] border border-neutral-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-[#111111]">
            Enquiries
          </h2>

          <p className="mt-3 text-neutral-500">
            Your enquiry management system will be connected here.
          </p>
        </div>
      </div>
    </main>
  );
}