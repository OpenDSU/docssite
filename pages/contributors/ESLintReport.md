---
title: ESLint Report
layout: home
parent: OpenDSU Contributors
nav_order: 2
---

<div id="eslint-report-content">
  <p>Loading latest ESLint report...</p>
  <noscript>Please enable JavaScript to view the ESLint report.</noscript>
  <style>
    .eslint-summary { margin: 1rem 0; }
    .eslint-table { border-collapse: collapse; width: 100%; }
    .eslint-table th, .eslint-table td { border: 1px solid #ddd; padding: 8px; }
    .eslint-table th { background-color: #f2f2f2; }
    .eslint-file { font-family: monospace; }
    .eslint-sev-error { color: #b00020; font-weight: 600; }
    .eslint-sev-warn { color: #8a6d3b; font-weight: 600; }
    details { margin: 0.25rem 0; }
  </style>
</div>

<script>
  document.addEventListener('DOMContentLoaded', async function () {
    const content = document.getElementById('eslint-report-content');
    const url = 'https://raw.githubusercontent.com/Axiologic/outfinity-gift/eslint-reports/eslint-report.json';

    try {
      const response = await fetch(url, { cache: 'no-cache' });
      if (!response.ok) throw new Error('Could not fetch the report');
      const data = await response.json();

      // ESLint JSON format: array of results per file
      const files = Array.isArray(data) ? data : [];
      const totalErrors = files.reduce((s, f) => s + (f.errorCount || 0), 0);
      const totalWarnings = files.reduce((s, f) => s + (f.warningCount || 0), 0);

      const summary = document.createElement('div');
      summary.className = 'eslint-summary';
      summary.innerHTML = `<strong>Total files:</strong> ${files.length} &nbsp; | &nbsp; <span class="eslint-sev-error">Errors: ${totalErrors}</span> &nbsp; | &nbsp; <span class="eslint-sev-warn">Warnings: ${totalWarnings}</span>`;

      const table = document.createElement('table');
      table.className = 'eslint-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th>File</th>
            <th>Errors</th>
            <th>Warnings</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;

      const tbody = table.querySelector('tbody');
      files
        .filter(f => (f.errorCount || 0) + (f.warningCount || 0) > 0)
        .sort((a,b) => (b.errorCount + b.warningCount) - (a.errorCount + a.warningCount))
        .forEach(file => {
          const tr = document.createElement('tr');
          const detail = document.createElement('details');
          const summaryEl = document.createElement('summary');
          summaryEl.textContent = 'View';
          detail.appendChild(summaryEl);

          const list = document.createElement('div');
          (file.messages || []).forEach(m => {
            const item = document.createElement('div');
            const sev = m.severity === 2 ? 'eslint-sev-error' : 'eslint-sev-warn';
            item.innerHTML = `<span class="${sev}">${m.severity === 2 ? 'Error' : 'Warn'}</span> [${m.ruleId || 'unknown'}] at ${m.line}:${m.column} - ${m.message}`;
            list.appendChild(item);
          });
          detail.appendChild(list);

          tr.innerHTML = `
            <td class="eslint-file">${file.filePath || ''}</td>
            <td class="eslint-sev-error">${file.errorCount || 0}</td>
            <td class="eslint-sev-warn">${file.warningCount || 0}</td>
          `;
          const tdDetails = document.createElement('td');
          tdDetails.appendChild(detail);
          tr.appendChild(tdDetails);
          tbody.appendChild(tr);
        });

      content.innerHTML = '';
      content.appendChild(summary);
      content.appendChild(table);
      if (files.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No ESLint results available.';
        content.appendChild(p);
      }
    } catch (error) {
      console.error('Error fetching the ESLint report:', error);
      content.innerHTML = `<p>Error loading report. Please check it at the following url: <a href="${url}">${url}</a></p>`;
    }
  });
</script>


