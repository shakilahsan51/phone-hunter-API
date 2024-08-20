const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);

}

const displayPhones = phones => {

    // Step 1 where to find
    const phoneContainer = document.getElementById('phone-container');

    // Clear phone container card before new search
    phoneContainer.textContent = '';


    phones.forEach(phone => {
        console.log(phone);

        // Step-2 Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;


        // Step-3 Set inner Html
        phoneCard.innerHTML =
            `
            <figure>
                <img src="${phone.image}"
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;

        // Step-4 Append Child

        phoneContainer.appendChild(phoneCard);

    })
}


const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


// loadPhone();