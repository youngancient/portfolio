import { useState } from "react";
import { ContactStyle } from "../../styles/Contact/style";

const emailAddress = "judetochyokoye@gmail.com";
const phoneNo = "+2348149756765";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:" + emailAddress;
    }
  };

  return (
    <ContactStyle id="contact" aria-labelledby="contact-title">
      <div className="inner">
        <h2 id="contact-title">Have a process that should run itself?</h2>
        <p className="lede">
          Tell me what your team does by hand every week. I'll tell you what can be automated, and
          what it would take.
        </p>
        <a className="email" href={`mailto:${emailAddress}`}>
          {emailAddress}
        </a>
        <div className="actions">
          <button type="button" onClick={copyEmail} aria-live="polite">
            {copied ? "Copied" : "Copy email"}
          </button>
          <a href={`tel:${phoneNo}`}>Call +234 814 975 6765</a>
        </div>
      </div>
    </ContactStyle>
  );
};
