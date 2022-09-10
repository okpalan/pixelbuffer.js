(function (global) {
    /**
     * A pixel buffer.
     *
     * @param {Array} data The array buffer that stores the pixel data.
     * @param {number} width The width of the pixel buffer.
     * @param {number} height The height of the pixel buffer.
     */
    function PixelBuffer(data) {
        this.data = data;
        this.width = this.data.width;
        this.height = this.data.height;
        this.buffer = new Uint32Array(this.data);
        return this
    }


    /**
     * Gets the index of the pixel in the array buffer.
     *
     * @param {number} x The x-coordinate of the pixel.
     * @param {number} y The y-coordinate of the pixel.
     * @return {number} The index of the pixel.
     */
    PixelBuffer.prototype.getIndex = function (x, y) {
        return (x + y * this.width) * 4;
    };

    /**
     * Sets the color of the pixel.
     *
     * @param {number} x The x-coordinate of the pixel.
     * @param {number} y The y-coordinate of the pixel.
     * @param {Vector} color The color of the pixel.
     */
    PixelBuffer.prototype.setPixel = function (x, y, color) {
        var i = this.getIndex(x, y);
        this.data[i] = color;
        // this.data[i] = color.r;
        // this.data[i + 1] = color.g;
        // this.data[i + 2] = color.b;
        // this.data[i + 3] = color.a || 255
    
    };

    PixelBuffer.prototype.getPixel = function (x, y) {
        var index = (y * this.width + x) * 4;
        return [
            this.data[index],
            this.data[index + 1],
            this.data[index + 2],
            this.data[index + 3]
        ];
    };
    /**
     * Blends a pixel buffer with this one.
     *
     * @param {PixelBuffer} pixelBuffer The pixel buffer to blend with this one.
     * @param {number} x The x-coordinate of the top-left corner of the pixel buffer.
     * @param {number} y The y-coordinate of the top-left corner of the pixel buffer.
     */
    PixelBuffer.prototype.blend = function (pixelBuffer, x, y) {
        var xMax = x + pixelBuffer.width;
        var yMax = y + pixelBuffer.height;

        for (var i = x, p = 0; i < xMax; i++, p++) {
            for (var j = y, q = 0; j < yMax; j++, q++) {
                var op = pixelBuffer.getPixel(p, q);
                this.setPixel(i, j, op);
            }
        }
    };

    /**
     * Creates a new pixel buffer.
     *
     * @param {number} width The width of the pixel buffer.
     * @param {number} height The height of the pixel buffer.
     * @param {object} color The default color of the pixel buffer.
     * @return {PixelBuffer} The new pixel buffer.
     */
    PixelBuffer.create = function (data) {
        if (!color) color = 0x00000000;
        data = new Uint32Array(width * height * 4);
        var pixelBuffer = new PixelBuffer(data, data.width, height);
        pixelBuffer.fill(color);
        return pixelBuffer;
    };

    /**
     * Fills the pixel buffer with a color.
     *
     * @param {object} color The color to fill the pixel buffer with.
     */
    PixelBuffer.prototype.fill = function (color) {
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                this.setPixel(i, j, color);
            }
        }
    };

    // implement a length property for the PixelBuffer.
    Object.defineProperty(PixelBuffer.prototype, 'length', {
        get() {
            return this.buffer.length;
        },
        configurable: false
    });



    if (typeof define == "function" && define.amd) {
        define([], PixelBuffer);
    } else if (typeof module == "object" && module.exports) {
        module.exports = PixelBuffer;
    }
    else {
        global.PixelBuffer = PixelBuffer;
    }
})(this);
