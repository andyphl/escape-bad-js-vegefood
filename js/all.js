/* global axios */
const table = document.querySelector('.table-content');
const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data;

function renderData(cropData) {
  let htmlStr = '';
  cropData.forEach((crop) => {
    const content = `
    <tr>
      <td>${crop['作物名稱']}</td>
      <td>${crop['市場名稱']}</td>
      <td>${crop['上價']}</td>
      <td>${crop['中價']}</td>
      <td>${crop['下價']}</td>
      <td>${crop['平均價']}</td>
      <td>${crop['交易量']}</td>
    </tr>`;
    htmlStr += content;
  });
  table.innerHTML = htmlStr;
}

function getData() {
  axios.get(url)
    .then((res) => {
      data = res.data.filter((a) => a.作物名稱);
      renderData(data);
    });
}

getData();

const filter = document.querySelector('.filter');
let category = '';
let showData = [];

function filterCategory(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  category = e.target.dataset.category;
  showData = data.filter((i) => i.種類代碼 === category);
  renderData(showData);
}

filter.addEventListener('click', filterCategory);
