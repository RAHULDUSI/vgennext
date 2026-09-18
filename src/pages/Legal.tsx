export default function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy'
  return <main className="pt-[78px]"><section className="py-24"><div className="container-x max-w-4xl"><p className="text-xs uppercase tracking-[.3em] text-blue-400">VGenNext</p><h1 className="mt-4 text-5xl font-bold">{privacy ? 'Privacy Policy' : 'Terms of Service'}</h1><div className="mt-10 space-y-6 text-sm leading-7 text-slate-400"><p>This page is a placeholder for the final legal document prepared for VGenNext.</p><p>Before production launch, replace this content with the company’s approved legal language, applicable privacy disclosures, cookie information, and contact details.</p></div></div></section></main>
}
