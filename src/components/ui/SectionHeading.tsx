type Props = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({ eyebrow, title, description, centered = false }: Props) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[.28em] text-blue-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{description}</p>}
    </div>
  )
}
