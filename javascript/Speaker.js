/* eslint-disable linebreak-style */
const experts = [
  {
    name: 'Adam Ondra',
    rank: '1st',
    country: 'CZE',
    info: 'A Czech professional rock climber, specializing in lead climbing and bouldering.',
    pictureUrl: 'media/Adam.jpg',
  },
  {
    name: 'Akiyo Noguchi',
    rank: '1st',
    country: 'JPN',
    info: 'Akiyo Noguchi is a Japanese professional rock climber, sport climber and boulderer.',
    pictureUrl: 'media/Akiyo Noguchi.jpg',
  },
  {
    name: 'Aleksei Rubtsov',
    rank: '2nd',
    country: 'RUS',
    info: ' He has participated in the bouldering competitions and won the world climbing championships in bouldering in 2009.',
    pictureUrl: 'media/Aleksei.jpg',
  },
  {
    name: 'Alannah Yip',
    rank: '2nd',
    country: 'CAN',
    info: 'Alannah Yip is a Canadian engineer and sport climber. She won a gold medal at the American Climbing Championships 2020 in Los Angeles.',
    pictureUrl: 'media/Alannah_Yip.png',
  },
  {
    name: 'Jan Hojer',
    rank: '3rd',
    country: 'Ger',
    info: 'Jan Hojer is a German professional rock climber. He is known for winning one World Cup and two European Championships in bouldering. ',
    pictureUrl: 'media/JanHojer.jpg',
  },
  {
    name: 'Fanny Gibert',
    rank: '3rd',
    country: 'FRA',
    info: 'Fanny is a devoted competition climber, who is mainly bouldering, and one of the strongest in the past few world cup seasons',
    pictureUrl: 'media/FannyGibert.jpg',
  },
];

for (let i = 0; i < experts.length; i += 1) {
  const expertContainer = `<div class="featured-experts">
  <div class="info-content">
  <div class = "img-container">
  <img src="${experts[i].pictureUrl}" class="image" alt="${experts[i].name}">
  </div>
  <div class = "bio-container">
  <h3>${experts[i].name}</h3>
  <p class="txt"><em>${experts[i].rank}</em></p>
  <p class="txt"><em>${experts[i].country}</em></p>
  <hr>
  <p>${experts[i].info}</p>
</div>
</div>

`;
  const featuredExpert = document.querySelector('.featured-experts');
  featuredExpert.innerHTML += expertContainer;
}
