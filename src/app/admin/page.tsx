import { supabaseServer } from "@/lib/supabaseServer";

export default async function AdminPage() {
  const { data: enquiries, error } = await supabaseServer
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Failed to load enquiries.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F8F6] p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C7A86D]">
            EDNEXA
          </p>

          <h1 className="mt-2 text-5xl font-semibold tracking-[-0.05em]">
            Lead Dashboard
          </h1>
        </div>

        <div className="rounded-[30px] border border-neutral-200 bg-white">

          <div className="border-b border-neutral-200 px-8 py-6">
            <h2 className="text-2xl font-semibold">
              Recent Enquiries
            </h2>
          </div>

          <div className="divide-y">

            {enquiries?.length === 0 && (
              <div className="p-8 text-neutral-500">
                No enquiries yet.
              </div>
            )}

            {enquiries?.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center justify-between p-8"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {lead.name}
                  </h3>

                  <p className="mt-1 text-neutral-500">
                    {lead.email}
                  </p>

                  <p className="mt-3">
                    {lead.service}
                  </p>
                </div>

                <div className="text-right">
                  <span className="rounded-full bg-[#C7A86D]/10 px-4 py-2 text-sm font-medium text-[#111111]">
                    {lead.status}
                  </span>

                  <p className="mt-4 text-sm text-neutral-500">
                    {new Date(
                      lead.created_at
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}