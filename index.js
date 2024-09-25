document.addEventListener('DOMContentLoaded', () => {
    const hotCoffeeList = document.getElementById('hot-coffee-list');
    const icedCoffeeList = document.getElementById('iced-coffee-list');
  
    function fetchAndDisplayCoffees(url, listElement) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json(); 
        })
        .then(data => {
          data.forEach(coffee => {
            const coffeeItem = document.createElement('div');
            coffeeItem.className = 'coffee-item';
  
            coffeeItem.innerHTML = `
              <img src="${coffee.image}" alt="${coffee.title}">
              <div class="info">
                <h3>${coffee.title}</h3>
                <p>${coffee.description}</p>
              </div>
            `;
  
            listElement.appendChild(coffeeItem);
          });
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    }
  
    fetchAndDisplayCoffees('https://api.sampleapis.com/coffee/hot', hotCoffeeList);
    fetchAndDisplayCoffees('https://api.sampleapis.com/coffee/iced', icedCoffeeList);
  });
  