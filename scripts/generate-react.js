import fs from 'fs';
import path from 'path';

function htmlToJsx(html) {
  let jsx = html;

  // Convert HTML comments to JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, (match, comment) => {
    // Avoid double braces if already present
    return `{/* ${comment.trim()} */}`;
  });

  // Convert standard HTML attributes to React JSX attributes
  jsx = jsx
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\btabindex=/g, 'tabIndex=')
    .replace(/\bautocomplete=/g, 'autoComplete=')
    .replace(/\bautofocus=/g, 'autoFocus=')
    .replace(/\breadonly=/g, 'readOnly=')
    .replace(/\bmaxlength=/g, 'maxLength=')
    .replace(/\bminlength=/g, 'minLength=')
    .replace(/\bcolspan=/g, 'colSpan=')
    .replace(/\browspan=/g, 'rowSpan=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=');

  // Convert style strings to JSX style objects
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').map(s => s.trim()).filter(Boolean);
    const obj = {};
    for (const rule of rules) {
      const idx = rule.indexOf(':');
      if (idx !== -1) {
        const prop = rule.slice(0, idx).trim();
        const val = rule.slice(idx + 1).trim();
        const camelProp = prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        obj[camelProp] = val;
      }
    }
    return `style={${JSON.stringify(obj)}}`;
  });

  // Ensure self-closing tags: img, input, br, hr
  jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Replace school-erp.html links with /school-erp
  jsx = jsx.replace(/href="school-erp\.html"/g, 'href="/school-erp"');

  return jsx;
}

const indexContent = fs.readFileSync('index.static.html', 'utf8');
const indexLines = indexContent.split('\n');

const schoolContent = fs.readFileSync('school-erp.static.html', 'utf8');
const schoolLines = schoolContent.split('\n');

console.log('Read source files successfully!');

// Export helper
export { htmlToJsx, indexLines, schoolLines };
