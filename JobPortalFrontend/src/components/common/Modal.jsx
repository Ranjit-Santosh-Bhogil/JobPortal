export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">Modal</h2>
      <p className="mt-2 text-sm text-slate-500">Implement UI here.</p>
    </section>
  )
}
