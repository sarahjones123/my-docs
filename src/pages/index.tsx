import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HeroSection() {
  return (
    <section 
      style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #1e40af 100%)',
        padding: '6rem 0',
        color: 'white',
        textAlign: 'left'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <Heading as="h1" style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Enterprise Gas Marketing Excellence
            </Heading>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
              Comprehensive documentation for nGenue, the leading enterprise platform for gas 
              marketing management. Master pipeline operations, LDC management, contract 
              optimization, and regulatory compliance.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                className="button button--lg"
                to="/docs/intro"
                style={{ 
                  backgroundColor: 'white', 
                  color: '#1e3a8a', 
                  border: 'none',
                  fontWeight: 600
                }}>
                Get Started
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/intro"
                style={{ 
                  borderColor: 'white', 
                  color: 'white',
                  fontWeight: 600
                }}>
                📖 View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreDocumentationSection(): ReactNode {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Explore nGenue Documentation
          </Heading>
          <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
            Comprehensive guides and references for every aspect of your gas marketing operations
          </p>
        </div>
        
        <div className="row">
          <div className="col col--6 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div className="card__header" style={{ position: 'relative' }}>
                <span 
                  style={{ 
                    backgroundColor: '#3b82f6', 
                    color: 'white', 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '0.375rem',
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem'
                  }}
                >
                  Popular
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>📦</div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Container Management</h3>
                </div>
              </div>
              <div className="card__body">
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Comprehensive guide to managing pipeline operations, capacity allocation, and 
                  load transportation logistics across your gas marketing network.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Core Module</span>
                  <span style={{ backgroundColor: '#e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Advanced</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--6 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div className="card__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>🏢</div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>LDC Management</h3>
                </div>
              </div>
              <div className="card__body">
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Master Local Distribution Company operations including nominations, balancing, 
                  tariff management, and regulatory compliance.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#dcfce7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Essential</span>
                  <span style={{ backgroundColor: '#fef3c7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Regulatory</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--6 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div className="card__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>📋</div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Contract Management</h3>
                </div>
              </div>
              <div className="card__body">
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Streamline contract lifecycle management from negotiation to execution, 
                  including pricing structures and terms optimization.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#e0e7ff', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Legal</span>
                  <span style={{ backgroundColor: '#fef3c7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Compliance</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--6 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div className="card__header" style={{ position: 'relative' }}>
                <span 
                  style={{ 
                    backgroundColor: '#3b82f6', 
                    color: 'white', 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '0.375rem',
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem'
                  }}
                >
                  Popular
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>💰</div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Pricing & Forecasting</h3>
                </div>
              </div>
              <div className="card__body">
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Advanced pricing strategies and market forecasting tools to optimize your 
                  gas marketing operations and maximize profitability.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#e0e7ff', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Analytics</span>
                  <span style={{ backgroundColor: '#e0e7ff', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Strategy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--6 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div className="card__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>📊</div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Market Analytics</h3>
                </div>
              </div>
              <div className="card__body">
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Real-time market analysis, demand forecasting, and performance metrics to 
                  drive data-informed business decisions.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#e0e7ff', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Analytics</span>
                  <span style={{ backgroundColor: '#dcfce7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Real-time</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--6 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div className="card__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>📈</div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Reporting & Compliance</h3>
                </div>
              </div>
              <div className="card__body">
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Automated reporting tools and compliance tracking to meet FERC and state 
                  regulatory requirements with audit trails.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#fef3c7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>FERC</span>
                  <span style={{ backgroundColor: '#fef3c7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Audit</span>
                  <span style={{ backgroundColor: '#dcfce7', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>Automated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNGenueSection(): ReactNode {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Why nGenue
          </p>
          <Heading as="h2" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Built for Enterprise Gas Marketing
          </Heading>
          <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            nGenue provides the comprehensive tools and features you need to manage 
            complex gas marketing operations at enterprise scale
          </p>
        </div>
        
        <div className="row">
          <div className="col col--4 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Regulatory Compliance</h3>
              <p style={{ color: '#64748b' }}>
                Built-in FERC and state regulatory compliance with automated reporting and audit trails.
              </p>
            </div>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Real-time Operations</h3>
              <p style={{ color: '#64748b' }}>
                Live pipeline monitoring, instant nominations, and real-time balancing across your network.
              </p>
            </div>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Multi-LDC Support</h3>
              <p style={{ color: '#64748b' }}>
                Manage operations across multiple Local Distribution Companies with unified workflows.
              </p>
            </div>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Enterprise Scale</h3>
              <p style={{ color: '#64748b' }}>
                Designed for large-scale gas marketers with complex multi-regional operations.
              </p>
            </div>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Automated Invoicing</h3>
              <p style={{ color: '#64748b' }}>
                Streamlined billing processes with automated invoice generation and customer portals.
              </p>
            </div>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <div className="card" style={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>24/7 Monitoring</h3>
              <p style={{ color: '#64748b' }}>
                Continuous system monitoring with alerts and notifications for critical operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const title = siteConfig?.title ?? 'nGenue Knowledge Base';
  
  return (
    <Layout
      title={title}
      description="Enterprise gas marketing management platform for large-scale operations">
      <HeroSection />
      <main>
        <ExploreDocumentationSection />
        <WhyNGenueSection />
      </main>
    </Layout>
  );
}
