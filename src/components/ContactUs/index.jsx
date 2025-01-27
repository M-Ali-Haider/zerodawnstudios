import { contactUsLinks } from "@/utils/contactUsLinks";

import FooterHeading from "../Headings/footerHeading";
import FooterLink from "./link";
const ContactUs = () => {
  return (
    <div
      id="contact"
      className="pt-16 pb-[78px] lg:pb-[0px] bg-black min-h-screen"
    >
      <FooterHeading title={"Contact us"} className={"mb-8 pl-8 flex"} />
      <div className="">
        {contactUsLinks.map((item, index) => (
          <FooterLink key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
