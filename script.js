document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const freeMode = document.getElementById('freeMode');
    const toolsList = document.getElementById('toolsList');

    let tools = [];

    // Load tools from tools.json
    fetch('tools.json')
        .then(response => {
            if (!response.ok) throw new Error('Gagal memuat tools.json');
            return response.json();
        })
        .then(data => {
            tools = data;
            renderTools();
        })
        .catch(error => {
            toolsList.innerHTML = '<p class="error">Error: Gagal memuat data alat AI.</p>';
            console.error(error);
        });

    // Render tools
    function renderTools() {
        toolsList.innerHTML = '';
        if (tools.length === 0) {
            toolsList.innerHTML = '<p class="error">Tidak ada alat AI yang tersedia.</p>';
            return;
        }

        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.classList.add('tool-card');
            toolCard.innerHTML = `
                <img src="logo.png" alt="${tool.name} Icon" class="tool-icon">
                <span class="tool-name">${tool.name} - ${tool.description.substring(0, 20)}...</span>
                <span class="tool-category">${tool.category}</span>
                <span class="tool-check">✅</span>
            `;
            toolsList.appendChild(toolCard);
        });
    }

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTools = tools.filter(tool =>
            tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query)
        );
        toolsList.innerHTML = '';
        if (filteredTools.length === 0) {
            toolsList.innerHTML = '<p class="error">Tidak ada alat ditemukan.</p>';
            return;
        }
        filteredTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.classList.add('tool-card');
            toolCard.innerHTML = `
                <img src="logo.png" alt="${tool.name} Icon" class="tool-icon">
                <span class="tool-name">${tool.name} - ${tool.description.substring(0, 20)}...</span>
                <span class="tool-category">${tool.category}</span>
                <span class="tool-check">✅</span>
            `;
            toolsList.appendChild(toolCard);
        });
    });

    // Toggle free mode
    freeMode.addEventListener('change', () => {
        console.log('Free mode:', freeMode.checked);
        // Tambahkan logika tambahan jika diperlukan
    });
});
