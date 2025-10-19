import { Facebook, Mail } from "lucide-react";

function ContactPage() {
  return (
    <div className="py-10">
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl text-white mb-2">
          <span className="text-primary">/</span>contacts
        </h1>
        <p className="text-gray">Who am I?</p>
      </div>
      <div className="flex justify-between">
        <p className="flex-1 text-gray indent-5 text-justify">
          I'm interested in Full Stack development , front-end development and
          backend development. However, I'm always eager to explore new areas
          within the tech world and expand my skill set. Don't hesitate to reach
          out if you have any opportunities or projects in mind!
        </p>
        <div className="flex-1 flex justify-end items-start space-x-3">
          <div className="border border-gray w-auto p-3 space-y-2 h-auto">
            <h2 className="text-white">Support me here</h2>
            <p className="text-gray">1638396378</p>
          </div>
          <div className="border border-gray w-auto p-3 space-y-2">
            <h2 className="text-white">Message me here</h2>
            <div className="flex gap-2 items-center">
              <Mail color="gray" />
              <p className="text-gray">plai_samudcha@hotmail.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Facebook color="gray" />
              <p className="text-gray">Samudcha Daengtubtim</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
