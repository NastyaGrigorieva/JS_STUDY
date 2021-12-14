const response = localStorage.getItem('STORE');

const data = JSON.parse(response);
data.forEach(card  => {
    const div = document.createElement('div');

    div.innerHTML = ` 
 <h2>${card.name}</h2>
 <h3>${card.num}</h3>
 <h4>${card.price}</h4>
 <img src="${card.image}"/>
  `;

    document.body.appendChild(div);
});


