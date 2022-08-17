# PixelBuffer
## A minimal implementation of a PixelBuffer.

The `PixelBuffer` constructor is used to create a new pixel buffer. A pixel buffer is an array buffer that stores pixel data. The `PixelBuffer` constructor takes three arguments: the array buffer that stores the pixel data, the width of the pixel buffer, and the height of the pixel buffer.

## Methods

### getIndex(x, y)
Gets the index of the pixel in the array buffer. The `x` and `y` arguments are the x-coordinate and y-coordinate of the pixel, respectively. The index of the pixel is returned.

### setPixel(x, y, color)
Sets the color of the pixel. The `x` and `y` arguments are the x-coordinate and y-coordinate of the pixel, respectively. The `color` argument is a vector that represents the color of the pixel.