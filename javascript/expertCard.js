/* eslint-disable linebreak-style */
const experts = [
  {
    name: 'Adam Ondra',
    rank: '1st',
    country: 'CZE',
    info: 'A Czech professional rock climber, specializing in lead climbing and bouldering.',
    pictureUrl: './img/enologo1.jpg',
  },
  {
    name: 'Akiyo Noguchi',
    rank: '1st',
    country: 'JPN',
    info: 'Akiyo Noguchi is a Japanese professional rock climber, sport climber and boulderer.She is known for winning the IFSC Climbing World Cup in Bouldering four times.',
    pictureUrl: './img/enologo4.jpg',
  },
  {
    name: 'Aleksei Rubtsov',
    rank: '2nd',
    country: 'RUS',
    info: ' He has participated in the bouldering competitions and won the world climbing championships in bouldering in 2009.',
    pictureUrl: './img/enologo2.jpg',
  },
  {
    name: 'Alannah Yip',
    rank: '2nd',
    country: 'CAN',
    info: 'Alannah Yip is a Canadian engineer and sport climber. She won a gold medal at the American Climbing Championships 2020 in Los Angeles.',
    pictureUrl: './img/enologo5.jpg',
  },
  {
    name: 'Jan Hojer',
    rank: '3rd',
    country: 'Ger',
    info: 'Jan Hojer is a German professional rock climber. He is known for winning one World Cup and two European Championships in bouldering. ',
    pictureUrl: './img/enologo3.jpg',
  },
  {
    name: 'Fanny Gibert',
    rank: '3rd',
    country: 'FRA',
    info: 'Fanny is a devoted competition climber, who is mainly bouldering, and one of the strongest in the past few world cup seasons',
    pictureUrl: './img/enologo6.jpg',
  },
];

function expertCard(expertDataObj) {
  const card = document.createElement('li');
  card.classList.add('expertCard');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('expertPic');

  const imgHolder = document.createElement('div');
  imgHolder.classList.add('imgHolder');

  const image = document.createElement('img');
  image.classList.add('picture');
  image.src = expertDataObj.pictureUrl;
  image.alt = `Picture of: ${expertDataObj.name} - ${expertDataObj.role}`;
  imgHolder.appendChild(image);
  imgDiv.appendChild(imgHolder);
  card.appendChild(imgDiv);
  // PIcture of the Expert

  const expertData = document.createElement('div');
  expertData.classList.add('expertData');

  const expertName = document.createElement('div');
  expertName.classList.add('expertName');
  expertName.innerText = expertDataObj.name;

  const expertRank = document.createElement('div');
  expertRank.classList.add('expertRank');
  expertRank.innerText = expertDataObj.rank;

  const expertCountry = document.createElement('div');
  expertCountry.classList.add('expertCountry');
  expertCountry.innerText = expertDataObj.country;

  const underline = document.createElement('p');
  underline.classList.add('underline');

  const expertInfo = document.createElement('div');
  expertInfo.classList.add('expertInfo');
  expertInfo.innerText = expertDataObj.info;

  expertData.appendChild(expertName);
  expertData.appendChild(expertRank);
  expertData.appendChild(expertCountry);
  expertData.appendChild(underline);
  expertData.appendChild(expertInfo);

  card.appendChild(expertData);
  return card;
}

const container = document.querySelector('.expertsInfo');

function getExpert() {
  for (let i = 0; i < 2; i += 1) {
    container.appendChild(expertCard(experts[i]));
  }
}

function getExpertMore() {
  for (let i = 0; i < experts.length; i += 1) {
    container.appendChild(expertCard(experts[i]));
  }
}

// function getAll() {
//   getExpert();
//   getExpertMore();
// }

function getCard(m) {
  if (m.matches) {
    getExpertMore();
  } else {
    getExpert();
  }
}

const mType = window.matchMedia('(min-width:768px)');
container.onload = getCard(mType);

const expandBtn = document.querySelector('.experts .btn-expand');

expandBtn.addEventListener('click', () => {
  getExpertMore();
  expandBtn.style.display = 'none';
});