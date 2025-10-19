import { Facebook, Mail, Phone } from "lucide-react";

function ContactPage() {
  return (
    <div className="py-6 md:py-10 px-4 md:px-0">
      <div className="flex flex-col mb-8 md:mb-10">
        <h1 className="text-2xl md:text-3xl text-white mb-2 text-center md:text-left">
          <span className="text-primary">/</span>contacts
        </h1>
        <p className="text-gray text-center md:text-left">
          Get in touch with me
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
        <div className="flex-1 order-2 lg:order-1">
          <p className="text-gray text-justify leading-relaxed">
            I'm interested in Full Stack development, front-end development and
            backend development. However, I'm always eager to explore new areas
            within the tech world and expand my skill set. Don't hesitate to
            reach out if you have any opportunities or projects in mind!
          </p>
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            {/* Support Card */}
            <div className="border border-gray-600 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 lg:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h2 className="text-white text-lg font-semibold mb-3 flex items-center">
                <span className="text-primary mr-2">#</span>
                Support me here
              </h2>
              <div className="flex items-center justify-center py-8">
                <p className="text-gray text-center">Coming soon...</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="border border-gray-600 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 lg:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h2 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">#</span>
                Message me here
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <Mail className="text-primary w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:plai_samudcha@hotmail.com"
                    className="text-gray group-hover:text-white transition-colors text-sm sm:text-base break-all"
                  >
                    plai_samudcha@hotmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Facebook className="text-primary w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="https://www.facebook.com/samudcha.daengtubtim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray group-hover:text-white transition-colors"
                  >
                    Samudcha Daengtubtim
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="text-primary w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:0955561598"
                    className="text-gray group-hover:text-white transition-colors"
                  >
                    Tel: 095-556-1598
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
