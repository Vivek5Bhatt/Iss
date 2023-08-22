const jwt = require("jsonwebtoken");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment")

const generateAccessToken = async () => {
  let issValue, subValue
  const keyFileName = 'iss_keys/server.key'
  const crtFileName = 'iss_keys/server.crt'
  if (process.env.ENVIRONMENT === 'dev') {
    issValue = '3MVG9qG3qyJ7I8u0JYE3oUBQcX4wBLno5mybWaHnNVvlMmdCZzAZ94bPzpDRL97r8badm9_TerQ=='
    subValue = 'iss-salesforce@wearehighwater.com'
  } else if (process.env.ENVIRONMENT === 'stage') {
    issValue = '3MVG9W4cDaFe_Aam_HBnYRFEnpbc9b19_.SimxEh7Sb_d1qGiho46XLWsOVUdDNuggBdb8mRxN0oRZy_bovI3'
    subValue = 'salesforce@wearehighwater.com.uat'
  } else if (process.env.ENVIRONMENT === 'sandbox') {
    issValue = '3MVG9oZtFCVWuSwNQoMq2nr1hLhjmgwXZg2TwRqM6D0s8bpKW5RcNIlWnf5RsRKob4xkajejvWt3CdyiRvSCl'
    subValue = 'jmaheshwari@wearehighwater.com.full'
  } else if (process.env.ENVIRONMENT === 'prod') {
    issValue = '3MVG9JEx.BE6yifMJjeOAKLcW7QNtp69SakNQS12Zx0f65017e0irEZRoYH61EDpBY6_Ai7x0ZvWP_2Jb5P5m'
    subValue = 'jmaheshwari@wearehighwater.com.full'
  }
  const privateKey = fs.readFileSync(keyFileName, 'utf8');
  const cert = fs.readFileSync(crtFileName, 'utf8');
  const key = cert + privateKey;
  let expiry = new Date();
  expiry = expiry.setMinutes(expiry.getMinutes() + 3);
  const baseUrl = "https://login.salesforce.com"
  const token = process.env.ENVIRONMENT === 'prod' ? 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiIzTVZHOUpFeC5CRTZ5aWZNSmplT0FLTGNXN1FOdHA2OVNha05RUzEyWngwZjY1MDE3ZTBpckVaUm9ZSDYxRURwQlk2X0FpN3gwWnZXUF8ySmI1UDVtIiwic3ViIjoiam1haGVzaHdhcmlAd2VhcmVoaWdod2F0ZXIuY29tIiwiYXVkIjoiaHR0cHM6Ly9sb2dpbi5zYWxlc2ZvcmNlLmNvbSIsImV4cCI6IjE3NDg3NDcwNjAifQ.VO9qGPOhkWWAaenj0nixpGbRyT3F83pEjjhWNrWzmV3uu8sqFq5Y6-ds83rMfTDO_sHn3hatbI8QUtwbFQuaVBJyJ0pmpP24xhgUsaEczb27YmCIHv3PilCAxhnKofkneNxSACpU_8rY6MjXS74wMfl9l2TyEMclL8z6cx52JyIQiUrEzqdHgRhwG2PjwrybA1zzQmNlmsDu-sIQKMSEX-AWj5eeuLOpFnf168AvUhGcJzli0WUqZAtg9bUwz8_LxgMgFMHf1HLtGpbhmjk3D5wXisUZPoW6F6KHRlZlsA8uFjLLTtToJwUDECEA2gFE-uBylyHjOenQX58vGjmOwg' : jwt.sign(
    {
      iss: issValue,
      sub: subValue,
      aud: baseUrl,
      exp: expiry,
    },
    key,
    { algorithm: "RS256" }
  );
  const res = await axios.post(
    `${baseUrl}/services/oauth2/token?Content-Type=application/x-www-form-urlencoded&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${token}`
  );
  return res.data;
};

const getProfile = async (body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/chatter/users/me`,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const getObjects = async (body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/sobjects`,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const getAccounts = async (body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/query?q=SELECT+name+from+Account`,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const getAccountDetail = async (body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/sobjects/Account/${body.accountId}`,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const updateAccount = async (body) => {
  const res = await axios.patch(
    `${body.instance_url}/services/data/v57.0/sobjects/Account/${body.accountId}`,
    body.form_data,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const getContacts = async (body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/sobjects/Contact`,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const getContactById = async (body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/sobjects/Contact/${body.contactId}`,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

const updateContact = async (body) => {
  const res = await axios.patch(
    `${body.instance_url}/services/data/v57.0/sobjects/Contact/${body.contactId}`,
    body.form_data,
    {
      headers: { Authorization: `Bearer ${body.access_token}` },
    }
  );
  return res.data;
};

//to upload file in salesforce
const uploadFileToSalesForce = async (body) => {
  const res = await axios.post(
    `${body.instance_url}/services/data/v57.0/sobjects/ContentVersion`,
    {
      ReasonForChange: "New Version",
      PathOnClient: body.fileName,
      VersionData: Buffer.from(body.VersionData).toString("base64"),
      ContentDocumentId: body.ContentDocumentId,
      Description: body.fileType === 'full' ? "Full Dossier" : body.fileType === "express" ? "Express Dossier" : "Reference"
    },
    {
      headers: {
        Authorization: `Bearer ${body.access_token}`,
      },
    }
  );
  return res.data;
};

const getFileFromSalesForce = async (ContentDocumentId, body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/sobjects/ContentVersion/${ContentDocumentId}/VersionData`,
    {
      headers: {
        Authorization: `Bearer ${body.access_token}`,
      },
    }
  );
  return res.data;
};

const getFileContentVersion = async (contentVersionId, body) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/sobjects/ContentVersion/${contentVersionId}`,
    {
      headers: {
        Authorization: `Bearer ${body.access_token}`,
      },
    }
  );
  return res.data;
};

const contentDocumentLink = async (ContentDocumentId, LinkedEntityId, body) => {
  const res = await axios.post(
    `${body.instance_url}/services/data/v57.0/sobjects/ContentDocumentLink`,
    {
      ContentDocumentId: ContentDocumentId,
      LinkedEntityId: LinkedEntityId,
      Visibility: "Allusers",
    },
    {
      headers: {
        Authorization: `Bearer ${body.access_token}`,
      },
    }
  );
  return res.data;
};

const findContentDocumentData = async (body, LinkedEntityId) => {
  const res = await axios.get(
    `${body.instance_url}/services/data/v57.0/query?q=select id, LinkedEntityId,ContentDocumentId from ContentDocumentLink where LinkedEntityId = '${LinkedEntityId}'`,
    {
      headers: {
        Authorization: `Bearer ${body.access_token}`,
      },
    }
  );
  return res.data;
};

const uploadFile = async (body) => {
  let userName, LinkedEntityId, contentDocumentID
  if (body.profileInfo) {
    userName = body.profileInfo.headerData.name
    LinkedEntityId = body.profileInfo.contactId
    contentDocumentID = body.profileInfo.contentDocumentID
  } else {
    userName = body.ref.name
    LinkedEntityId = body.contactId
    contentDocumentID = body.contentDocumentID
  }
  const bodyData = {
    instance_url: body.instance_url,
    access_token: body.access_token,
  };
  const currentDateTime = moment().format('YYYY-MM-DD HH:mm:SS')
  const uploadFileData = {
    instance_url: body.instance_url,
    access_token: body.access_token,
    VersionData: body.VersionData,
    fileName:
      body.type === "full"
        ? `${userName} ${currentDateTime} Full Dossier.pdf`
        : body.type === "express"
          ? `${userName} ${currentDateTime} Express Dossier.pdf`
          : body.type === "reference" && body.fileName ? body.fileName : `${userName} ${currentDateTime} Reference.pdf`,
    ContentDocumentId: contentDocumentID,
    fileType: body.type
  };
  const getContentVersion = await uploadFileToSalesForce(uploadFileData);
  const getContentVersionId = getContentVersion.id;
  if (!contentDocumentID && getContentVersionId) {
    const getContentDocument = await getFileContentVersion(
      getContentVersionId,
      bodyData
    );
    const getContentDocumentId = getContentDocument.ContentDocumentId;
    if (getContentDocumentId) {
      const getContentDocumentLinkData = await contentDocumentLink(
        getContentDocumentId,
        LinkedEntityId,
        bodyData
      );
      const findContentDocument = await findContentDocumentData(
        bodyData,
        LinkedEntityId
      );
      const contentDocuntPresent = findContentDocument.records.find((data) => {
        return data.Id === getContentDocumentLinkData.id;
      });
      return contentDocuntPresent;
    }
  }
};

module.exports = {
  generateAccessToken,
  getProfile,
  getObjects,
  getAccounts,
  getAccountDetail,
  updateAccount,
  getContacts,
  getContactById,
  updateContact,
  uploadFileToSalesForce,
  getFileFromSalesForce,
  uploadFile,
};
