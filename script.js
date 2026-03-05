const stores = [
    {
        name: "Manikandan Biryani - T Nagar",
        area: "T Nagar",
        address: "No.12, T Nagar, Chennai"
    },
    {
        name: "Manikandan Biryani - Velachery",
        area: "Velachery",
        address: "45, Velachery Main Road, Chennai"
    },
    {
        name: "Manikandan Biryani - Anna Nagar",
        area: "Anna Nagar",
        address: "23, Anna Nagar East, Chennai"
    },
    {
        name: "Manikandan Biryani - Tambaram",
        area: "Tambaram",
        address: "78, GST Road, Tambaram"
    }
];

function displayStores(storeArray) {
    const storeList = document.getElementById("storeList");
    storeList.innerHTML = "";

    if (storeArray.length === 0) {
        storeList.innerHTML = "<p>No stores found</p>";
        return;
    }

    storeArray.forEach(store => {
        storeList.innerHTML += `
            <div class="store">
                <h3>${store.name}</h3>
                <p><strong>Area:</strong> ${store.area}</p>
                <p><strong>Address:</strong> ${store.address}</p>
            </div>
        `;
    });
}

function searchStore() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const filteredStores = stores.filter(store =>
        store.area.toLowerCase().includes(searchValue)
    );

    displayStores(filteredStores);
}

// Show all stores when page loads
displayStores(stores);
