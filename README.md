# PixelBuffer
## An implementation of a PixelBuffer.

## Without PixelBuffer.js
```html
  <canvas id="buffer1"></canvas>
    <script>
        // vanillajs example if you do not need this module.
        const canvas = document.getElementById('buffer1');
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(100, 100);
        const pixelBuffer = new Uint32Array(imageData.data.buffer);
        for (let i = 0; i < pixelBuffer.length; i++) {
            pixelBuffer[i] = 0xFF0000FF;
        }
        ctx.putImageData(imageData, 0, 0);
    </script>
```
## With PixelBuffer.js
The `PixelBuffer` constructor is used to create a new pixel buffer. A pixel buffer is an array buffer that stores pixel data. The `PixelBuffer` constructor takes three arguments: the array buffer that stores the pixel data, the width of the pixel buffer, and the height of the pixel buffer.

## Methods

### getIndex(x, y)
Gets the index of the pixel in the array buffer. The `x` and `y` arguments are the x-coordinate and y-coordinate of the pixel, respectively. The index of the pixel is returned.

### setPixel(x, y, color)
Sets the color of the pixel. The `x` and `y` arguments are the x-coordinate and y-coordinate of the pixel, respectively. The `color` argument is a vector that represents the color of the pixel.

# Example
The following example creates a pixel buffer and sets the color of the pixel at position (0, 0) to red.

```html
  <canvas id="buffer2"></canvas>
    <script type="./pixelbuffer.js">
        const canvas = document.getElementById('buffer2');
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(100, 100);
        const pixelBuffer = new PixelBuffer(imageData.data.buffer, 100, 100);
        pixelBuffer.setPixel(0, 0, 0xFF2B2B00);
        ctx.putImageData(imageData, 0, 0);
    </script>
```