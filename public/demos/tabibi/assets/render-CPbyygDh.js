import{a as u,F as p,D as h,P as l,b as g}from"./runtime-CNAgBrMG.js";import"./vendor-CcR_CNlk.js";const $=["Noto Naskh Arabic","Noto Serif"],f=`${$.map(t=>`'${t}'`).join(", ")}, serif`;function i(t,n={}){u(t,"formal");const r=p[t];if(r===void 0)throw new Error(`i18n: "${t}" is not in the ar-EG formal bundle — a document cannot print it`);return r.replace(/\{\{(\w+)\}\}/g,(s,a)=>{const o=n[a];if(o===void 0)throw new Error(`i18n: "${t}" needs a value for "${a}" — a document cannot print an empty placeholder`);return o})}const e=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=t=>{const n=g.find(r=>r.key===t);if(!n)throw new Error(`unknown paper size ${t}`);return n},m=t=>{switch(t){case"PRESCRIPTION":return"print.prescription.title";case"ENCOUNTER_SUMMARY":return"print.encounterSummary.title";case"LAB_REQUEST":return"print.labRequest.title";case"RECEIPT":return"print.receipt.title";case"PATIENT_RECORD":return"print.patientRecord.title";default:throw new Error(`unknown document type ${t}`)}};function b(t){const n=c(t),r=n.heightMm===null,s=r?`${n.widthMm}mm auto`:`${n.widthMm}mm ${n.heightMm}mm`,a=r?"3mm":"12mm",o=r?11:12;return`
    @page { size: ${s}; margin: 0; }
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: ${a};
      width: ${n.widthMm}mm;
      direction: ${l};
      /* D-75, IR-24. The Naskh face carries no Latin letters and no Latin
         punctuation, so every \`ml\`, \`/\`, \`·\` and Latin drug name on this page
         resolved through the trailing generic — an unpinned face chosen by
         whatever container the render worker happens to run in, on the artefact
         ADR-001 calls canonical and §3 says is pinned by version. Both faces are
         now named, and \`apps/mobile\` bundles the same two. The generic stays as
         a last resort and the golden suite asserts it is never reached. */
      font-family: ${f};
      font-size: ${o}pt;
      line-height: 1.6;
      color: #111;
      background: #fff;
    }
    header { border-block-end: 1pt solid #111; padding-block-end: 2mm; margin-block-end: 4mm; }
    h1 { font-size: ${o+4}pt; margin: 0 0 1mm; }
    .clinic { font-size: ${o}pt; font-weight: 700; }
    .branch { font-size: ${o-1}pt; color: #444; }
    dl.meta { display: grid; grid-template-columns: auto 1fr auto 1fr; gap: 1mm 3mm; margin: 0 0 4mm; }
    dl.meta dt { font-weight: 700; }
    dl.meta dd { margin: 0; }
    /* Pagination is what the goldens pin (ADR-001 §2.2): a line that breaks
       across a page is a dose split between two sheets. */
    ol.lines { margin: 0; padding-inline-start: 6mm; }
    ol.lines li { margin-block-end: 3mm; break-inside: avoid; page-break-inside: avoid; }
    .name { font-weight: 700; }
    .detail { font-size: ${o-1}pt; color: #222; }
    .instructions { font-size: ${o-1}pt; }
    .unchecked { font-size: ${o-2}pt; color: #7a2c00; }
    section.body { margin-block-end: 4mm; break-inside: avoid; }
    section.body h2 { font-size: ${o+1}pt; margin: 0 0 1mm; }
    section.body p { margin: 0; white-space: pre-wrap; }
    .flags { margin-block-end: 3mm; font-size: ${o-1}pt; color: #7a2c00; }
    footer { margin-block-start: 6mm; font-size: ${o-2}pt; color: #444; }
    .signature { margin-block-start: 10mm; }
    .signature .rule { border-block-end: 1pt solid #111; width: 45mm; margin-block-start: 8mm; }
    /* FR-FIN-15. The amount column is aligned to the line *end*, not to the
       right: that is the left edge in RTL and the right edge if this is ever
       rendered for an insurer in English (NFR-U08, P3). */
    table.money { width: 100%; border-collapse: collapse; margin-block-end: 3mm; }
    table.money td { padding: 0.8mm 0; vertical-align: top; }
    table.money td.amount { text-align: end; white-space: nowrap; font-variant-numeric: tabular-nums; }
    table.money tr.total td { border-block-start: 1pt solid #111; font-weight: 700; padding-block-start: 1.5mm; }
    .receiptNumber { font-size: ${o+2}pt; font-weight: 700; margin-block-end: 2mm; }
    /* Both markings are warnings about the *status of the paper*, so they share
       the colour the unchecked-allergy note uses rather than inventing a
       second one. */
    .provisional, .reprint { font-size: ${o-1}pt; color: #7a2c00; font-weight: 700; margin-block-end: 2mm; }
  `}function v(t){const n=t.clinic.branchName===null?"":`<div class="branch">${e(i("print.field.branch"))}: ${e(t.clinic.branchName)}</div>`;return`<header>
      <h1>${e(i(m(t.document)))}</h1>
      <div class="clinic">${e(t.clinic.name)}</div>
      ${n}
    </header>`}function w(t){const n=t.clinic.practitionerName===null?"":`<dt>${e(i("print.field.practitioner"))}</dt><dd>${e(t.clinic.practitionerName)}</dd>`,r=t.patient.ageLabel===null?"":`<dt>${e(i("print.field.age"))}</dt><dd>${e(t.patient.ageLabel)}</dd>`;return`<dl class="meta">
      <dt>${e(i("print.field.patientName"))}</dt><dd>${e(t.patient.displayName)}</dd>
      <dt>${e(i("print.field.mrn"))}</dt><dd>${e(t.patient.mrn)}</dd>
      ${r}
      <dt>${e(i("print.field.date"))}</dt><dd>${e(t.dateLabel)}</dd>
      ${n}
    </dl>`}function k(t){const n=[];return(t.amendmentCount??0)>0&&n.push(e(i("print.field.amended",{count:String(t.amendmentCount)}))),t.autoSigned===!0&&n.push(e(i("print.field.autoSigned"))),n.length===0?"":`<div class="flags">${n.join(" · ")}</div>`}function E(t){return!t.lines||t.lines.length===0?"":`<ol class="lines">${t.lines.map(r=>{const s=r.durationDays===null?i("print.prescription.durationOpen"):i("print.prescription.durationDays",{count:String(r.durationDays)}),a=r.instructions===null||r.instructions.length===0?"":`<div class="instructions">${e(i("print.prescription.instructions"))}: ${e(r.instructions)}</div>`,o=r.allergyChecked?"":`<div class="unchecked">${e(i("print.prescription.notChecked"))}</div>`;return`<li>
          <div class="name">${e(r.name)}</div>
          <div class="detail">${e(i("print.prescription.dose"))}: ${e(r.dose)} ${e(r.doseUnit)} ·
            ${e(i("print.prescription.frequency"))}: ${e(r.frequency)} ·
            ${e(i("print.prescription.duration"))}: ${e(s)}</div>
          ${a}
          ${o}
        </li>`}).join("")}</ol>`}function N(t){if(t.document!=="RECEIPT")return"";const n=t.receipt;if(!n)return"";const r=n.number===null?`<div class="provisional">${e(i("print.receipt.provisional",{reference:n.reference}))}</div>`:`<div class="receiptNumber">${e(i("print.receipt.number",{number:n.number}))}</div>`,s=n.copyNumber>1?`<div class="reprint">${e(i("print.receipt.reprint",{copy:String(n.copyNumber)}))}</div>`:"",a=(t.receiptLines??[]).map(d=>`<tr><td>${e(d.description)}</td><td class="amount">${e(d.amountLabel)}</td></tr>`).join(""),o=n.discountLabel===null?"":`<tr><td>${e(i("print.receipt.discount"))}</td><td class="amount">${e(n.discountLabel)}</td></tr>`;return`${r}${s}
    <table class="money">
      ${a}
      <tr><td>${e(i("print.receipt.subtotal"))}</td><td class="amount">${e(n.subtotalLabel)}</td></tr>
      ${o}
      <tr class="total"><td>${e(i("print.receipt.total"))}</td><td class="amount">${e(n.totalLabel)}</td></tr>
      <tr><td>${e(i("print.receipt.paid"))}</td><td class="amount">${e(n.paidLabel)}</td></tr>
    </table>
    <dl class="meta">
      <dt>${e(i("print.receipt.method"))}</dt><dd>${e(n.methodLabel)}</dd>
      <dt>${e(i("print.receipt.receivedBy"))}</dt><dd>${e(n.receivedByName)}</dd>
    </dl>`}function T(t){return!t.sections||t.sections.length===0?"":t.sections.filter(n=>n.body.trim().length>0).map(n=>`<section class="body"><h2>${e(n.heading)}</h2><p>${e(n.body)}</p></section>`).join("")}function R(t){return`${c(t.paper).heightMm===null?"":`<div class="signature">${e(i("print.field.signature"))}<div class="rule"></div></div>`}
    <footer>${e(i("print.footer.generated",{timestamp:t.generatedAtLabel}))}</footer>`}function S(t){if(!h.some(n=>n.key===t.document))throw new Error(`unknown document type ${t.document}`);return c(t.paper),`<!doctype html>
<html lang="ar" dir="${l}">
<head>
<meta charset="utf-8">
<title>${e(i(m(t.document)))}</title>
<style>${b(t.paper)}</style>
</head>
<body>
${v(t)}
${w(t)}
${k(t)}
${N(t)}
${E(t)}
${T(t)}
${R(t)}
</body>
</html>`}function z(t,n){const r=(n.getUTCFullYear()-t.getUTCFullYear())*12+(n.getUTCMonth()-t.getUTCMonth())-(n.getUTCDate()<t.getUTCDate()?1:0);return r<24?i("print.field.ageMonths",{count:String(r)}):i("print.field.ageYears",{count:String(Math.floor(r/12))})}export{f as DOCUMENT_FONT_STACK,$ as REQUIRED_FONT_FAMILIES,z as ageLabel,i as formal,S as renderDocument};
