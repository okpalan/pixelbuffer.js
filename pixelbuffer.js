(function (global) {
    /**
     * A pixel buffer.
     *
     * @param {Array} data The array buffer that stores the pixel data.
     * @param {number} width The width of the pixel buffer.
     * @param {number} height The height of the pixel buffer.
     */
    function PixelBuffer(data, width, height) {
        this.data = data;
        this.width = width;
        this.height = height;
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
        this.data[i] = color.x;
        this.data[i + 1] = color.y;
        this.data[i + 2] = color.z;
        this.data[i + 3] = 255;
    };


    if (typeof define == "function" && define.amd) {
        define([], PixelBuffer);
    } else if (typeof module == "object" && module.exports) {
        module.exports = PixelBuffer;
    }
    else {
        global.PixelBuffer = PixelBuffer;
    }
})(this);