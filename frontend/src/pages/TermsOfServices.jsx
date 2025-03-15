import React from "react";

const TermsOfServices = () => {
  return (
    <div className="flex flex-col">
     
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?terms,services")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 mt-10">
          <h1 className="text-4xl font-bold text-white text-center">Terms of Services</h1>
          <p className="mt-4 text-lg text-white max-w-xl text-center">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

    
      <div className="max-w-5xl mx-auto py-12 px-4">
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using our website, you agree to be bound by these Terms of Services.
            If you do not agree to these terms, please refrain from using our services.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Services Provided</h2>
          <p className="text-gray-700 leading-relaxed">
            We offer a variety of services related to banquet hall bookings and event management.
            All services are provided on an "as is" basis without any warranties of any kind.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            Users are expected to use our services responsibly and in accordance with applicable laws.
            Misuse of our services may result in suspension or termination of your account.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms of Services at any time. Any changes will be posted
            on this page and become effective immediately. Your continued use of the site indicates your acceptance
            of any modified terms.
          </p>
        </section>

        
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about these Terms of Services, please contact us at
            support@example.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServices;
