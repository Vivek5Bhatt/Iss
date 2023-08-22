export const generatePdfFromBuffer = (arrayBuffer) => {
  try {
    let blob = new Blob([toArrayBuffer(arrayBuffer)]);
    let url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "dossier.pdf");
    document.body.appendChild(link);
    link.click();
  } catch (err) {
    console.log(err);
  }
};

const toArrayBuffer = (buf) => {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
};
