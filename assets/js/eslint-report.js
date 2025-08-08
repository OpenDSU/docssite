(function () {
    function createCell(html) {
        var td = document.createElement('td');
        td.innerHTML = html;
        return td;
    }

    function escapeHtml(str) {
        if (!str && str !== 0) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function render(data) {
        var content = document.getElementById('eslint-report-content');
        if (!content) return;

        var files = Array.isArray(data) ? data : [];
        var totalErrors = files.reduce(function (s, f) { return s + (f.errorCount || 0); }, 0);
        var totalWarnings = files.reduce(function (s, f) { return s + (f.warningCount || 0); }, 0);

        var summary = document.createElement('div');
        summary.className = 'eslint-summary';
        summary.innerHTML = '<strong>Total files:</strong> ' + files.length +
            ' &nbsp; | &nbsp; ' + '<span class="eslint-sev-error">Errors: ' + totalErrors + '</span>' +
            ' &nbsp; | &nbsp; ' + '<span class="eslint-sev-warn">Warnings: ' + totalWarnings + '</span>';

        var table = document.createElement('table');
        table.className = 'eslint-table';

        var thead = document.createElement('thead');
        var trh = document.createElement('tr');
        ['File', 'Errors', 'Warnings', 'Details'].forEach(function (h) {
            var th = document.createElement('th');
            th.textContent = h;
            trh.appendChild(th);
        });
        thead.appendChild(trh);
        table.appendChild(thead);

        var tbody = document.createElement('tbody');

        files
            .filter(function (f) { return (f.errorCount || 0) + (f.warningCount || 0) > 0; })
            .sort(function (a, b) { return (b.errorCount + b.warningCount) - (a.errorCount + a.warningCount); })
            .forEach(function (file) {
                var tr = document.createElement('tr');

                tr.appendChild(createCell('<span class="eslint-file">' + escapeHtml(file.filePath || '') + '</span>'));
                tr.appendChild(createCell('<span class="eslint-sev-error">' + (file.errorCount || 0) + '</span>'));
                tr.appendChild(createCell('<span class="eslint-sev-warn">' + (file.warningCount || 0) + '</span>'));

                var details = document.createElement('details');
                var sum = document.createElement('summary');
                sum.textContent = 'View';
                details.appendChild(sum);

                var list = document.createElement('div');
                (file.messages || []).forEach(function (m) {
                    var sevClass = m.severity === 2 ? 'eslint-sev-error' : 'eslint-sev-warn';
                    var div = document.createElement('div');
                    div.innerHTML = '<span class="' + sevClass + '">' + (m.severity === 2 ? 'Error' : 'Warn') + '</span>' +
                        ' [' + escapeHtml(m.ruleId || 'unknown') + '] at ' + escapeHtml(m.line) + ':' + escapeHtml(m.column) +
                        ' - ' + escapeHtml(m.message);
                    list.appendChild(div);
                });
                details.appendChild(list);

                var td = document.createElement('td');
                td.appendChild(details);
                tr.appendChild(td);
                tbody.appendChild(tr);
            });

        content.innerHTML = '';
        content.appendChild(summary);
        content.appendChild(table);

        if (files.length === 0) {
            var p = document.createElement('p');
            p.textContent = 'No ESLint results available.';
            content.appendChild(p);
        }
    }

    function fetchAndRender() {
        var url = 'https://raw.githubusercontent.com/OutfinityResearch/outfinity-gift/eslint-reports/eslint-report.json';
        var content = document.getElementById('eslint-report-content');
        if (!content) return;

        fetch(url, { cache: 'no-cache' })
            .then(function (r) {
                if (!r.ok) throw new Error('Could not fetch the report');
                return r.text();
            })
            .then(function (text) {
                try {
                    var json = JSON.parse(text);
                    render(json);
                } catch (e) {
                    console.error('JSON parse error', e);
                    content.innerHTML = '<p>Error parsing report JSON. See console for details. You can download it from: <a href="' + url + '">' + url + '</a></p>';
                }
            })
            .catch(function (err) {
                console.error('Error fetching the ESLint report:', err);
                content.innerHTML = '<p>Error loading report. Please check it at the following url: <a href="' + url + '">' + url + '</a></p>';
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fetchAndRender);
    } else {
        fetchAndRender();
    }
})();


