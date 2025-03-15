import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      
      <div
        className="relative h-64 bg-cover bg-center mt-8"
        style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?privacy,policy")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-lg text-white text-center max-w-2xl">
            Your privacy is important to us. Read our policy to learn how we manage your personal information.
          </p>
        </div>
      </div>

    
      <div className="max-w-4xl mx-auto py-12 px-4">
      
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website. We are committed to safeguarding your privacy and ensuring a secure online experience.
          </p>
        </section>

       
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect various types of information to improve your experience on our site. This may include your name, email address, phone number, and payment details when you make a purchase.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Your information is used to process orders, improve our services, and keep you informed about updates and promotions. We also use your data to enhance our website functionality and user experience.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners when necessary to complete transactions or comply with legal obligations.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement a variety of security measures to ensure the safety of your personal information. Although no method is 100% secure, we strive to protect your data from unauthorized access and use.
          </p>
        </section>

    
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We encourage you to review this policy regularly to stay informed about how we protect your information.
          </p>
        </section>

       
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at privacy@example.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
