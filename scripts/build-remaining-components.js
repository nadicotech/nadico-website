import fs from 'fs';
import { htmlToJsx, indexLines } from './generate-react.js';

// 1. ClientMarquee (lines 2583 to 2653)
const clientMarqueeHtml = indexLines.slice(2582, 2653).join('\n');
const clientMarqueeJsx = htmlToJsx(clientMarqueeHtml);

fs.writeFileSync(
  'src/components/ClientMarquee.jsx',
  `import React from 'react';

export default function ClientMarquee() {
  return (
${clientMarqueeJsx}
  );
}
`
);
console.log('ClientMarquee.jsx written!');

// 2. ErpSolutions (lines 2654 to 2871)
const erpSolutionsHtml = indexLines.slice(2653, 2871).join('\n');
const erpSolutionsJsx = htmlToJsx(erpSolutionsHtml);

fs.writeFileSync(
  'src/components/ErpSolutions.jsx',
  `import React from 'react';
import { Link } from 'react-router-dom';

export default function ErpSolutions() {
  return (
${erpSolutionsJsx}
  );
}
`
);
console.log('ErpSolutions.jsx written!');

// 3. WebAndMarketing (lines 2872 to 2972)
const webMarketingHtml = indexLines.slice(2871, 2972).join('\n');
const webMarketingJsx = htmlToJsx(webMarketingHtml);

fs.writeFileSync(
  'src/components/WebAndMarketing.jsx',
  `import React from 'react';

export default function WebAndMarketing() {
  return (
${webMarketingJsx}
  );
}
`
);
console.log('WebAndMarketing.jsx written!');

// 4. WhyNadico (lines 2973 to 3024)
const whyNadicoHtml = indexLines.slice(2972, 3024).join('\n');
const whyNadicoJsx = htmlToJsx(whyNadicoHtml);

fs.writeFileSync(
  'src/components/WhyNadico.jsx',
  `import React from 'react';

export default function WhyNadico() {
  return (
${whyNadicoJsx}
  );
}
`
);
console.log('WhyNadico.jsx written!');

// 5. ContactSection (lines 3025 to 3165)
let contactHtml = indexLines.slice(3024, 3165).join('\n');
let contactJsx = htmlToJsx(contactHtml);

// Bind form submission
contactJsx = contactJsx.replace(
  'onsubmit="handleFormSubmit(event)"',
  'onSubmit={handleSubmit}'
);
contactJsx = contactJsx.replace(
  'onclick="submitViaWhatsApp()"',
  'onClick={handleSubmit}'
);
// Bind input values
contactJsx = contactJsx.replace(
  'id="formName"',
  'id="formName" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}'
);
contactJsx = contactJsx.replace(
  'id="formOrg"',
  'id="formOrg" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })}'
);
contactJsx = contactJsx.replace(
  'id="formPhone"',
  'id="formPhone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}'
);
contactJsx = contactJsx.replace(
  'id="formService"',
  'id="formService" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}'
);
contactJsx = contactJsx.replace(
  'id="formMessage"',
  'id="formMessage" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}'
);
// Success message visibility
contactJsx = contactJsx.replace(
  'id="formSuccessMessage" className="hidden p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium space-y-1"',
  'id="formSuccessMessage" className={`p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium space-y-1 ${submitted ? "block" : "hidden"}`}'
);

fs.writeFileSync(
  'src/components/ContactSection.jsx',
  `import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    phone: '',
    service: 'School Management ERP',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        \`Hi NADICO Technologies!\\n\\nI want to request a live demo:\\n- Name: \${formData.name || 'Prospective Client'}\\n- Organization: \${formData.org || 'Institution'}\\n- Phone: \${formData.phone || 'Pending'}\\n- Solution: \${formData.service}\\n- Notes: \${formData.message || 'None'}\`
      );
      window.open(\`https://wa.me/923337221552?text=\${text}\`, '_blank');
    }, 700);
  };

  return (
${contactJsx}
  );
}
`
);
console.log('ContactSection.jsx written!');

// 6. Footer (lines 3166 to 3261)
const footerHtml = indexLines.slice(3165, 3261).join('\n');
const footerJsx = htmlToJsx(footerHtml);

fs.writeFileSync(
  'src/components/Footer.jsx',
  `import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
${footerJsx}
  );
}
`
);
console.log('Footer.jsx written!');

// 7. FloatingWhatsApp (lines 3262 to 3272)
const waHtml = indexLines.slice(3261, 3272).join('\n');
const waJsx = htmlToJsx(waHtml);

fs.writeFileSync(
  'src/components/FloatingWhatsApp.jsx',
  `import React from 'react';

export default function FloatingWhatsApp() {
  return (
${waJsx}
  );
}
`
);
console.log('FloatingWhatsApp.jsx written!');
