function loadImage (url) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = function () {
      resolve(image)
    }

    image.onerror = function () {
      const message = 'Could not load image at ' + url
      reject(new Error(message))
    }

    image.src = url
  })
}

export default loadImage
