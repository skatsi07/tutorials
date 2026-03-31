function processImage(img, cv) {
    //read the image from the HTML Image object into an OpenCV Mat
    let src = cv.imread(img);
    let dst = new cv.Mat();

    //convert to grey scale
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);

    //apply adaptive thresholding
    cv.adaptiveThreshold(dst, dst, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 2);

    //clean up the source Mat to free memory
    src.delete();

    //return the processed Mat for app.js to render
    return dst;
}

module.exports = {
    processImage
};
