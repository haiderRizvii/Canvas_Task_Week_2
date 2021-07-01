const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const reader = new FileReader();
const img = new Image();

/* const cls = document
  .getElementsByTagName('input')[1]
  .getAttribute('class')
  .split(' ')[1];

console.log(cls); */

//Image Uploader function.
const uploadImage = (e) => {
  reader.onload = () => {
    img.onload = () => {
      canvas.width = img.width;
      img.height = canvas.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};

const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener('change', uploadImage);

//Write on header and footer..
const writeOnHead = (e) => {
  const textHead = document.getElementById('overText').value;
  console.log(textHead);
  ctx.font = 'italic 35px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = headColor;
  ctx.fillText(textHead, canvas.width / 2, 50);
};

const writeOnFoot = (e) => {
  const textFoot = document.getElementById('belowText').value;
  console.log(textFoot);
  ctx.font = 'italic 35px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = footColor;
  ctx.fillText(textFoot, canvas.width / 2, canvas.height - 20);
};

//Combined Function to write on Click event.
const writeOnImage = () => {
  writeOnHead();
  writeOnFoot();
};

document.getElementById('writeOnImage').addEventListener('click', writeOnImage);

//Download image..
function download() {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'image.png';
  link.click();
}

document.getElementById('download').addEventListener('click', download);

//Color Picking of Header and Footer.
let headColor = '#111';
let footColor = '#111';

const headColorPicker = (e) => {
  headColor = document.getElementById('headColorPicker').value;
  console.log(headColor);
};

const footColorPicker = (e) => {
  footColor = document.getElementById('footColorPicker').value;
  console.log(footColor);
};

headColor = document
  .getElementById('headColorPicker')
  .addEventListener('click', headColorPicker);

footColor = document
  .getElementById('footColorPicker')
  .addEventListener('click', footColorPicker);
