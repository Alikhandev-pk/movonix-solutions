import React from 'react';

export default function TermsOfService({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`pt-32 pb-24 max-w-4xl mx-auto px-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
      <h1 className={`text-4xl font-extrabold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Terms of Service</h1>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <p>Welcome to Movonix Solutions.</p>
        <p>By using our website or services, you agree to the following terms.</p>
        
        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Services</h2>
          <p className="mb-4">We provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Website development</li>
            <li>AI solutions</li>
            <li>SEO services</li>
            <li>UI/UX design</li>
            <li>Automation systems</li>
            <li>Business digital solutions</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>50% advance payment is required before project initiation.</li>
            <li>Remaining payment must be completed before final delivery.</li>
            <li>Delayed payments may affect project timelines.</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Project Delivery</h2>
          <p className="mb-4">Delivery timelines depend on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Project complexity</li>
            <li>Client response time</li>
            <li>Revision requests</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Revisions</h2>
          <p>Reasonable revisions are included according to the selected package.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Client Responsibilities</h2>
          <p className="mb-4">Clients must provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Required content</li>
            <li>Images</li>
            <li>Branding materials</li>
            <li>Project details on time</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Intellectual Property</h2>
          <p>Final project ownership is transferred after full payment completion.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Prohibited Use</h2>
          <p className="mb-4">Clients may not use our services for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Illegal activities</li>
            <li>Fraudulent purposes</li>
            <li>Harmful or malicious content</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Limitation of Liability</h2>
          <p className="mb-4">Movonix Solutions is not responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Third-party service downtime</li>
            <li>Hosting failures</li>
            <li>External platform issues</li>
            <li>Client-side misuse</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Termination</h2>
          <p>We reserve the right to terminate services if terms are violated.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Updates to Terms</h2>
          <p>These terms may be updated without prior notice.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact Information</h2>
          <p>For service-related inquiries:</p>
          <p>Email: <a href="mailto:info.movonixsolutions@gmail.com" className="text-[#0A66FF] hover:underline">info.movonixsolutions@gmail.com</a></p>
        </section>
      </div>
    </div>
  );
}
