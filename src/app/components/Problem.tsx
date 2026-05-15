export function Problem() {
  return (
    <section id="problem" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Lead data starts in spreadsheets. Brevo needs structured records.
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Most teams collect leads from forms, partners, events or manual sheets. But turning those rows into complete Brevo records often requires manual imports, technical workflow setup or multiple disconnected automation steps.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-3" aria-hidden="true">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fragile workflows</h3>
            <p className="text-gray-600">Generic automation platforms require complex multi-step configurations that break easily</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-3" aria-hidden="true">🔍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Poor visibility</h3>
            <p className="text-gray-600">No clear way to see which rows synced, which failed, or why errors occurred</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-3" aria-hidden="true">🏢</div>
            <h3 className="font-semibold text-gray-900 mb-2">Missing relationships</h3>
            <p className="text-gray-600">Contact-company linking is manual or requires separate technical setup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
