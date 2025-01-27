async function getFetchDetails() {
    var url = document.getElementById('url').value;
    document.getElementById('form-container').style.display = 'none';
    var str = "https://api.github.com/users/" + url;
    try {
        const response = await fetch(str);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        const table = document.createElement('table');
        table.className = 'styled-table';

        const headerRow = document.createElement('tr');
        const keyHeader = document.createElement('th');
        keyHeader.textContent = 'Key';
        headerRow.appendChild(keyHeader);

        const valueHeader = document.createElement('th');
        valueHeader.textContent = 'Value';
        headerRow.appendChild(valueHeader);

        table.appendChild(headerRow);

        for (const [key, value] of Object.entries(data)) {
            const row = document.createElement('tr');

            const keyCell = document.createElement('td');
            keyCell.textContent = key;
            row.appendChild(keyCell);

            const valueCell = document.createElement('td');
            valueCell.textContent = value;
            row.appendChild(valueCell);

            table.appendChild(row);
        }

        document.body.appendChild(table);
    } catch (error) {
        console.log(error.message);
    }
}
