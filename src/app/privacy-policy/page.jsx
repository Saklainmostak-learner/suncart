import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
      <div className="bg-white rounded-3xl shadow-sm border border-orange-100 p-8">
        <h1 className="text-4xl font-extrabold text-yellow-950 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 leading-7 mb-4">
          SunCart respects your privacy. We only collect basic information
          required for authentication and profile management, such as your name,
          email, and profile image.
        </p>

        <p className="text-gray-600 leading-7 mb-4">
          Your information is used only to improve your shopping experience and
          manage access to protected pages.
        </p>

        <p className="text-gray-600 leading-7">
          We do not sell or share your personal information with third parties.
        </p>
      </div>
    </section>
    );
};

export default PrivacyPolicyPage;