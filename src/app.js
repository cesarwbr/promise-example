import loadImage from './load-image'

let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/js1.png'),
  loadImage('images/js2.png'),
  loadImage('images/js3.png')
]).then(images => {
  images.forEach(image => {
    addImg(image.src)
  })
}).catch(err => {
  console.log(err)
})
