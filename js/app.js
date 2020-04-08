'use strict';

function Image(data) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
}

Image.prototype.render = () => {
  $('#photo-template').append(`
    <h2>${this.title}</h2>
    <img>${this.image_url}</img>
    <p>${this.description}</p>
  `);
};

const addValuesToSection = (item) => {
  console.log(`item: ${item.title}`);
  $('#photo-template').append(`
  <div class="image ${item.keyword}">
      <h2>${item.title}</h2>
      <img src="${item.image_url}" height="100px" width="100px">
      <p>${item.description}</p>
    </div>`);
};

$.ajax('/data/page-1.json').then(data => {
  data.forEach(addValuesToSection);
});

const addValuesToDropdown = (item) => {
  $('#dropdown-menu').append(`
      <option>${item.keyword}</option>
    `);
};

$.ajax('/data/page-1.json').then(data => {
  data.forEach(addValuesToDropdown);
});

$('#dropdown-menu').change(function() {
  var selectedImage = $(this).children('option:selected').val();
  $('.image').hide();
  $('.' + selectedImage).show();
});
