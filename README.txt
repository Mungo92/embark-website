Embark Partners static website

Files included:
- index.html
- style.css
- script.js
- favicon.svg

How to host on SiteGround:
1. Log in to SiteGround.
2. Open Site Tools for the domain.
3. Go to Site > File Manager.
4. Open public_html.
5. Upload index.html, style.css, script.js and favicon.svg directly into public_html.
6. If there is an old index file, back it up first, then replace it with this index.html.

Personalisation:
- The page falls back to general Embark Partners copy when no visitor details are known.
- Custom campaign URLs can pass name, organisation and/or industry. Example:
  /?name=Priya%20Shah&organisation=Northbank%20Health&industry=healthcare
- Supported URL aliases include:
  - name, firstName, firstname, visitor, contact
  - organisation, organization, org, company, account
  - industry, sector, vertical
- When a visitor fills in the Name, Organisation or Industry fields, those values are saved in the browser and reused on later visits.
- Tracking or CRM scripts can personalise the page by setting window.embarkVisitor before script.js loads, or by calling window.embarkPersonalise({ name, organisation, industry }) after load.
- Integrations can also dispatch a custom event:
  window.dispatchEvent(new CustomEvent('embark:personalise', { detail: { name: 'Priya', organisation: 'Northbank Health', industry: 'healthcare' } }));

Notes:
- This version does not require React, Node.js or a build step.
- The contact form uses mailto, so it opens the visitor's email app.
- For a production form, connect the form to SiteGround email handling, a form plugin or a form service.
