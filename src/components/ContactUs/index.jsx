import { contactUsLinks } from "@/utils/contactUsLinks";

import FooterHeading from "../Headings/footerHeading";
import FooterLink from "./link";
const ContactUs = () => {
  return (
    <div className="pt-16 pb-[78px] bg-black min-h-screen">
      <FooterHeading title={"Contact Us"} className={"mb-8 pl-8 flex"} />
      <div className="px-4 xs:px-8">
        {contactUsLinks.map((item, index) => (
          <FooterLink key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
