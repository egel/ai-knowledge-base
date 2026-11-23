import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const topics = [
  {emoji: '💬', title: 'Prompting', to: '/docs/prompting', desc: 'Techniques and examples that work'},
  {emoji: '🧰', title: 'Tools', to: '/docs/tools', desc: 'Notes on AI tools, models and services'},
  {emoji: '🔄', title: 'Workflows', to: '/docs/workflows', desc: 'Step-by-step recipes for building with AI'},
  {emoji: '⚠️', title: 'Gotchas', to: '/docs/gotchas', desc: 'Pitfalls and lessons learned'},
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Hello" description={siteConfig.tagline}>
      <main style={{maxWidth: 900, margin: '0 auto', padding: '3rem 1rem'}}>
        <h1>🧠 {siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem'}}>
          {topics.map((t) => (
            <Link key={t.to} to={t.to} style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12, padding: '1.25rem', textDecoration: 'none'}}>
              <h3 style={{marginBottom: '.25rem'}}>{t.emoji} {t.title}</h3>
              <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>{t.desc}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
