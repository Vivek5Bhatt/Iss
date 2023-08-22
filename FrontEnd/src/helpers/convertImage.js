export const getBase64Image = (imgUrl, callback) => {
    let img = new Image();
    img.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        callback(dataURL);

    };
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;
}
