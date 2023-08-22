const hbs = require("handlebars");
const fs = require("fs");
const path = require("path");

//handlebar helpers---------------------------------------------------------
hbs.registerHelper("progress-linebar", function (number) {
  let className = "";
  number = Number(number);
  if (number >= 1 && number <= 3)
    className = ` progress-linebar light-green-bgcolor w-${number}`;
  else if (number >= 4 && number <= 5) {
    className = ` progress-linebar dark-green-bgcolor w-${number}`;
  } else if (number >= 6 && number <= 7) {
    className = ` progress-linebar see-green-bgcolor w-${number}`;
  } else if (number >= 8 && number <= 9) {
    className = ` progress-linebar blue-bgcolor w-${number}`;
  } else if (number === 10) {
    className = ` progress-linebar purple-bgcolor w-${number}`;
  }
  return new hbs.SafeString(className);
});

hbs.registerHelper("logo", function (imagePath) {
  const bitmap = fs.readFileSync(
    path.join(__dirname, "../public/images", imagePath)
  );
  const base64String = new Buffer.from(bitmap).toString("base64");

  return new hbs.SafeString(`data:image/png;base64,${base64String}`);
});

hbs.registerHelper("eachInMap", function (obj, block) {
  let out = "";
  Object.keys(obj).map(function (prop) {
    out += block.fn({ key: prop, value: obj[prop] });
  });
  return out;
});

hbs.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});

hbs.registerHelper("convertObjtoArr", function (obj, block) {
  let arr = [];
  let obj1 = {};
  let obj2 = {};

  const objectLength = Math.round(Object.keys(obj).length / 2);

  Object.entries(obj).forEach(([k, v]) => {
    if (v) {
      if (objectLength > Object.keys(obj1).length) obj1[k] = v;
      else obj2[k] = v;
    }
  });

  arr.push(obj1, obj2);

  let out = "";
  for (let o of arr) {
    Object.keys(o).map(function (prop) {
      if (prop === "language") {
        out += block.fn({ key: prop, value: o[prop].replace(/,/g, ", ") });
      } else out += block.fn({ key: prop, value: o[prop] });
    });
  }
  return out;
});

hbs.registerHelper("checkStringType", function (aString) {
  return typeof aString == "string" ? aString : "";
});

hbs.registerHelper("checkQuestionType", function (aString) {
  return aString != "questions" ? convertKeyName(aString) + ":" : "";
});

hbs.registerHelper("convertKeyName", function (key) {
  return convertKeyName(key);
});

hbs.registerHelper('isObject', function (value) {
  return Object.keys(value).length !== 0;
});

//------------------------------------------------------------------------------
const convertKeyName = (key) => {
  const firstCharacter = key.charAt(0).toUpperCase();
  const otherCharacter = key
    .slice(1)
    .replace(/([A-Z])/g, " $1")
    .trim();
  const ofCharacter = otherCharacter.replace("of", " of");
  return firstCharacter + ofCharacter;
};

const compile = async (templateName, data) => {
  const filePath = path.join(process.cwd(), "templates", `${templateName}.hbs`);
  const html = fs.readFileSync(filePath, "utf-8");
  return hbs.compile(html)(data);
};

const registerPartials = (data, isFull) => {
  const reference = fs.readFileSync("templates/reference.hbs").toString();
  const profileInfo = fs.readFileSync("templates/profileInfo.hbs").toString();
  if (isFull) {
    const referenceBy = fs.readFileSync("templates/referenceBy.hbs").toString();
    hbs.registerPartial("referenceBySection", hbs.compile(referenceBy)(data));
  }
  //register partials
  hbs.registerPartial(
    "profileInfoSection",
    hbs.compile(profileInfo)(data.profileInfo)
  );
  hbs.registerPartial(
    "referenceSection",
    hbs.compile(reference)(data.reference)
  );

  //------------------------
};

module.exports = {
  compile,
  registerPartials,
};
