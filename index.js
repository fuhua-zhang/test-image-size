const sizeOf = require('image-size')
const dimensions = sizeOf('failed-image')
// const dimensions = sizeOf('previous-uploaded')
console.log(dimensions.width, dimensions.height)
