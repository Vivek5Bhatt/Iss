const mammoth = require("mammoth");
const chromeLambda = require("chrome-aws-lambda");
const { GeneratePdf } = require("../helpers/generatePdf");
// const { UploadBase64FileOnS3, s3download } = require("../helpers/uploadFiles3");
const { merge } = require("../helpers/mergeBuffers");
const { compile, registerPartials } = require("../helpers/hbsHelper");
const PDFMerger = require("pdf-merger-js");


const generatePdfFromHTML = async (html, css, files) => {
  try {
    let fileArray = [];
    if (files) {
      if (files.file && files.file.length)
        fileArray = [...fileArray, ...files.file];
      else fileArray = [...fileArray, files.file];
    }
    if (
      checkFileExt(
        fileArray,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    )
      throw new Error("only .docx files are allowed.");
    let data;
    let pdfArray = [];
    const browser = await chromeLambda.puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });

    await page.setContent(html, { waitUntil: "domcontentloaded" });
    await page.addStyleTag({ content: css });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    if (fileArray.length) {
      const buf = await page.pdf({
        format: "A4",
        printBackground: true,
      });
      pdfArray.push(buf);
    } else {
      data = await page.pdf({
        format: "A4",
        printBackground: true,
        // scale: 793.69 / 1200,
      });
    }

    //generate from doc files
    if (fileArray.length) {
      for (let file of fileArray) {
        let docHtml = await mammoth
          .convertToHtml({ path: file.tempFilePath })
          .then(function (result) {
            const html = result.value; // The generated HTML
            return html;
          });
        docHtml = `${docHtml}`;
        await page.setContent(docHtml, {
          waitUntil: "domcontentloaded",
        });
        const buf = await page.pdf({
          format: "A4",
          printBackground: true,
        });
        pdfArray.push(buf);
      }
      //------------------------------------------------
      //merge pdfs
      data = merge(pdfArray);
    }
    await browser.close();
    return data;
  } catch (err) {
    throw err;
  }
};

const gernatePdfFromDoc = async (file) => {
  try {
    if (
      !file ||
      file.file.mimetype !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      throw new Error("only .docx files are allowed.");
    const browser = await chromeLambda.puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
    });
    const page = await browser.newPage();

    // mammoth is used to convert doc file data to html
    let html = await mammoth
      .convertToHtml({ path: file.file.tempFilePath })
      .then(function (result) {
        const html = result.value; // The generated HTML
        const messages = result.messages;
        return html;
      });
    html = `${html}`;

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
    });

    const data = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    return data;
  } catch (err) {
    throw err;
  }
};

const mergePdf = async (files) => {
  try {
    let file = [];

    if (files.file && files.file.length > 1) file = [...file, ...files.file];
    else throw new Error("Please select more than 1 file");

    if (checkFileExt(file, "application/pdf"))
      throw new Error("only .pdf files are allowed.");

    const merger = new PDFMerger();

    for (let f of file) {
      await merger.add(f.tempFilePath);
    }
    data = await merger.saveAsBuffer();
    return data;
  } catch (err) {
    throw err;
  }
};

const fullDossier = async (data) => {
  try {
    const browser = await chromeLambda.puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });
    registerPartials(data, true);
    const html = await compile("main", data);

    await page.setContent(html, { waitUntil: "domcontentloaded" });

    await page.addStyleTag({ path: "public/css/dossier.css" });

    // // // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    const content = await GeneratePdf(page);

    await page.setContent(content, { waitUntil: "domcontentloaded" });

    await page.addStyleTag({ path: "public/css/dossier.css" });

    const pdf = await page.pdf({
      // path: `${new Date()}.pdf`,
      format: "A4",
      printBackground: true,
      // scale: 793.69 / 1200,
    });
    await browser.close();
    return pdf;
  } catch (err) {
    throw err;
  }
};

const expressDossier = async (data) => {
  try {
    const browser = await chromeLambda.puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });
    registerPartials(data, false);
    const html = await compile("main", data);

    await page.setContent(html, { waitUntil: "domcontentloaded" });

    await page.addStyleTag({ path: "public/css/dossier.css" });

    // // // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    const content = await GeneratePdf(page);

    await page.setContent(content, { waitUntil: "domcontentloaded" });

    await page.addStyleTag({ path: "public/css/dossier.css" });

    const pdf = await page.pdf({
      // path: `${new Date()}.pdf`,
      format: "A4",
      printBackground: true,
      // scale: 793.69 / 1200,
    });
    await browser.close();
    return pdf;
  } catch (err) {
    throw err;
  }
};

const reference = async (data) => {
  try {
    const browser = await chromeLambda.puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });
    registerPartials(data, true);
    const html = await compile("main", data);

    await page.setContent(html, { waitUntil: "domcontentloaded" });

    await page.addStyleTag({ path: "public/css/dossier.css" });

    // // // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    const content = await GeneratePdf(page);

    await page.setContent(content, { waitUntil: "domcontentloaded" });

    await page.addStyleTag({ path: "public/css/dossier.css" });

    const pdf = await page.pdf({
      // path: `${new Date()}.pdf`,
      format: "A4",
      printBackground: true,
      // scale: 793.69 / 1200,
    });
    await browser.close();
    return pdf;
  } catch (err) {
    throw err;
  }
};

const checkFileExt = (files, ext) => {
  for (let file of files) {
    if (file.mimetype !== ext) return true;
  }
};

module.exports = {
  generatePdfFromHTML,
  gernatePdfFromDoc,
  mergePdf,
  fullDossier,
  expressDossier,
  reference
};
