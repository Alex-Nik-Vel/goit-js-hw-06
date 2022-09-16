const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesGallery = document.querySelector('.gallery');

console.log(imagesGallery);

const catGallery = images.map(function ({url, alt}) {
   const liHtml = `<li class = imgLi>
   <img class = img src=${url} alt=${alt} width = 1260>
    </li>` 
    imagesGallery.insertAdjacentHTML("beforeend", liHtml);
       
  })
 
imagesGallery.style.listStyle = "none";
imagesGallery.style.margin = '0';
imagesGallery.style.padding = '0';
imagesGallery.style.display = "grid"; 
imagesGallery.style.gridTemplateColumns = 'repeat(1)';
imagesGallery.style.gridAutoRows = 'minmax(300px, auto)';
imagesGallery.style.gridRowGap = '3em';
 
// const catGallery = 
//   images.forEach(function (image, index) {
//    const imgEl = document.createElement('img');
//    const liHtml = `<li class = imgLi>
//    <img class = img src=${images[index].url} alt=${images[index].alt} width = 1260>
//     </li>` 
//     imagesGallery.insertAdjacentHTML("beforeend", liHtml);
       
//   })
 
 