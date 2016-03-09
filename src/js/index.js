// Javascript Entry Point

import etsyData from './items';
import $ from 'jquery';

var items = etsyData.results;

function makeProd(product) {
  
  var firstImage = product.Images[0].url_170x135;

  return `
    <div class="item">
      <div class="item-photo">
        <img src="${firstImage}" alt="${product.description}">
      </div>
      <div class="price">${product.price}</div>
      <div class="item-title">${product.title}</div>
    </div>
  `;
}


items.forEach(function(product) {
  $('main').append(makeProd(product));
});
