# PixelBuffer
## A minimal implementation of a PixelBuffer.

The `PixelBuffer` constructor is used to create a new pixel buffer. A pixel buffer is an array buffer that stores pixel data. The `PixelBuffer` constructor takes three arguments: the array buffer that stores the pixel data, the width of the pixel buffer, and the height of the pixel buffer.

## Methods

### getIndex(x, y)
Gets the index of the pixel in the array buffer. The `x` and `y` arguments are the x-coordinate and y-coordinate of the pixel, respectively. The index of the pixel is returned.

### setPixel(x, y, color)
Sets the color of the pixel. The `x` and `y` arguments are the x-coordinate and y-coordinate of the pixel, respectively. The `color` argument is a vector that represents the color of the pixel.

# Example#
The following example creates a pixel buffer and sets the color of the pixel at position (0, 0) to red.

```js
var data = new Uint8Array(4);
var width = 1;
var height = 1;
var pixelBuffer = new PixelBuffer(data, width, height);

var color = {
    x:225,
    y:0,
    z:0,
    a:255
}
pixelBuffer.setPixel(0, 0, color);
```
