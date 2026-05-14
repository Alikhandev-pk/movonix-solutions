import React from 'react';

export default function PrivacyPolicy({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`pt-32 pb-24 max-w-4xl mx-auto px-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
      <h1 className={`text-4xl font-extrabold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Privacy Policy</h1>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <p>At Movonix Solutions, we value your privacy and are committed to protecting your personal information.</p>
        
        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Information We Collect</h2>
          <p className="mb-4">We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business details</li>
            <li>Website information</li>
            <li>Messages submitted through contact forms</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide our services</li>
            <li>Respond to inquiries</li>
            <li>Improve user experience</li>
            <li>Process projects and support requests</li>
            <li>Send important updates related to services</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Data Protection</h2>
          <p>We implement modern security measures to protect your information from unauthorized access, misuse, or disclosure.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Third-Party Services</h2>
          <p className="mb-4">We may use trusted third-party services such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics</li>
            <li>Hosting providers</li>
            <li>Payment platforms</li>
            <li>Communication tools</li>
          </ul>
          <p className="mt-4">These services may collect limited technical data necessary for functionality.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cookies</h2>
          <p>Our website may use cookies to improve performance and user experience.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>User Rights</h2>
          <p className="mb-4">Users may request:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to their data</li>
            <li>Data correction</li>
            <li>Data deletion</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Policy Updates</h2>
          <p>Movonix Solutions may update this Privacy Policy when necessary. Changes will be reflected on this page.</p>
        </section>

        <section>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact</h2>
          <p>For privacy-related questions:</p>
          <p>Email: <a href="mailto:info.movonixsolutions@gmail.com" className="text-[#0A66FF] hover:underline">info.movonixsolutions@gmail.com</a></p>
        </section>
      </div>
    </div>
  );
}
