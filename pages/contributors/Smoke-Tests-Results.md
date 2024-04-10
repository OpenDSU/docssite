---
title: Smoke Tests Results
layout: home
parent: OpenDSU Contributors
nav_order: 1
---

<div id="smoke-test-report-content">
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    let url = 'https://raw.githubusercontent.com/OpenDSU/opendsu-sdk/test_reports/testReport.html';
    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Could not fetch the report');
        }
      })
      .then(function(html) {
        document.getElementById('smoke-test-report-content').innerHtml = `<iframe id="display"></iframe>`;
        let iframeDoc = document.querySelector('display').contentWindow.document;
        iframeDoc.open('text/html', 'replace');
        iframeDoc.write(html);
        iframeDoc.close();        
      })
      .catch(function(error) {
        console.error('Error fetching the report:', error);
        document.getElementById('smoke-test-report-content').innerHTML = `<p>Error loading report. Please check it at the following url: ${url}</p>`;
      });
  });
</script>
