import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Patients' },
  { value: '24/7', label: 'Emergency Care' },
  { value: '20+', label: 'Specialists' },
]

function StatCard({ value, label, delay }) {
  const [ref, isVisible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`stat-card ${isVisible ? 'reveal' : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, i) => (
            <StatCard key={item.label} {...item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
