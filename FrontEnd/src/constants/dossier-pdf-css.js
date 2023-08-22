export const dossierPdfCss=`


/*  color */



:root {
  --primary-color: #44A49E;
  --secondary-color: #34383F;
  --grey-color: #999999;
  --white-color: #fff;
  --grey-color-100: #cccccc;
  --grey-color-200: #eee;
  --grey-color-300: #E5E5E5;
  --light-green-color: #C0C793;
  --dark-green-color: #859B80;
  --see-green-color: #76B8B9;
  --blue-color: #5999BE;
  --purple-color: #344287;
  --black-color: #000;

  /* fonts */
  --primary-font: 'Roboto', sans-serif;
  --secondary-font: 'Montserrat', sans-serif;
  --serif-font: 'STIX Two Text', serif;
}


* {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  text-rendering: optimizeSpeed;
  box-sizing: border-box;
  scrollbar-width: thin;
}

body {
  transition: 0.4s;
  position: relative;
  font-family: var(--primary-font) !important;
  scrollbar-width: thin;
  -webkit-print-color-adjust: exact;
}


img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0px;
  
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
  margin-bottom: 0px !important;
}
p{
  margin-bottom: 0px !important;
}


ul {
  padding: 0px;
}

ul li {
  list-style: none;
}

.align-items-center {
  align-items: center;
}

.secondary-font {
  font-family: var(--secondary-font) !important;
}

.serif-font {
  font-family: var(--serif-font);
}

.small-caps {
  font-variant: small-caps;
}


body::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  background-color: rgba(0, 0, 0, 0.17);
}

body::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.17);
}

body::-webkit-scrollbar-thumb {
  background-color: #6F6F73;
}

.primary-color {
  color: var(--primary-color);
}

.secondary-color {
  color: var(--secondary-color);
}

.grey-color {
  color: var(--grey-color);
}

.primary-bgcolor {
  background-color: var(--primary-color);
}

.secondary-bgcolor {
  background-color: var(--secondary-color);
}

.white-color {
  color: var(--white-color);
}

.black-color {
  color: var(--black-color);
}

.light-green-color {
  color: var(--light-green-color) !important;
}

.dark-green-color {
  color: var(--dark-green-color) !important;
}

.see-green-color {
  color: var(--see-green-color) !important;
}

.blue-color {
  color: var(--blue-color) !important;
}

.purple-color {
  color: var(--purple-color) !important;
}

.dark-green-bgcolor {
  background-color: var(--dark-green-color) !important;
}

.light-green-bgcolor {
  background-color: var(--light-green-color) !important;
}

.see-green-bgcolor {
  background-color: var(--see-green-color) !important;
}

.blue-bgcolor {
  background-color: var(--blue-color) !important;
}

.purple-bgcolor {
  background-color: var(--purple-color) !important;
}

/* font weight */
.fw-300 {
  font-weight: 300;
}

.fw-400 {
  font-weight: 400;
}

.fw-500 {
  font-weight: 500;
}

.fw-600 {
  font-weight: 600;
}

.fw-700 {
  font-weight: 700;
}

.fw-900 {
  font-weight: 900;
}

.fs-14 {
  font-size: 14px;
}

.fs-15 {
  font-size: 15px;
}

.fs-12 {
  font-size: 11px;
}

.fs-16 {
  font-size: 16px;
}

.fs-28 {
  font-size: 28px;
}

.fs-20 {
  font-size: 20px;
}

.fs-18 {
  font-size: 18px;
}

.fs-17 {
  font-size: 17px;
}

.titlebx {
  line-height: 1.2;
}

.pt-15 {
  padding-top: 15px !important;
}

.fs-30 {
  font-size: 30px;
}

.fs-27 {
  font-size: 27px;
}

.fs-20 {
  font-size: 20px;
}

.pt-8 {
  padding-top: 8px;
}

.pt-82 {
  padding-top: 82px !important;
}

.text-capitalise {
  text-transform: capitalize;
}

.italic-font {
  font-style: italic;
}

.text-transfer {
  text-transform: uppercase;
}

.pb-8 {
  padding-bottom: 8px;
}
table{
  caption-side: bottom;
  border-collapse: collapse;
}

/* */
.col {
  flex: 1 0;
  width: 100%;
  max-width: 100%;
  padding-left: 9.6px;
  padding-right: 9.6px;
}
.col-md-6 {
  width: 50% !important;
  padding-left: 9.6px;
  padding-right: 9.6px;
  flex: 0 0 auto;
}
.col-md-12{
  width: 100% !important;
  padding-left: 9.6px;
  padding-right: 9.6px;
  flex: 0 0 auto;
} 

.col-md-8 {
  width: 66.66666667% !important;
  padding-left: 9.6px;
  padding-right: 9.6px;
  flex: 0 0 auto;
}

.col-md-4 {
  width: 33.33333333% !important;
  padding-left: 9.6px;
  padding-right: 9.6px;
  flex: 0 0 auto;
}

.w-70 {
  width: 65%;
}

.text-decoration {
  text-decoration: underline;
}

.cstm-container {
  max-width: 820px;
  --bs-gutter-x: 1.2rem;
  width: 100%;
  margin: 0 auto;

}

.col.box2{
  max-width: 200px;
}

.row {
  --bs-gutter-x: 1.2rem !important;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -9.5px;
}

.header-listing {
  line-height: 1;
  padding:2px 0 0 0px;
  margin: 0px;
}

.header-listing li {
  display: inline-block;
  position: relative;
  padding-right: 10px;


}

.header-listing li:last-child {
  padding-right: 0px;
}

.header-listing li:last-child::after {
  display: none;
}

.boder-dark {
  border-color: var(--grey-color-300) !important;
}

.header-listing li:after {
  content: "";
  position: absolute;
  top: 1px;
  right: 2px;
  width: 2px;
  height: 10px;
  background-color: var(--secondary-color);

}

.header-box {

  padding: 15px;
}

.header-box-fixed {
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 100%;
  max-width: 820px;
  background: linear-gradient(90deg, #CCFAF7 0%, #FEF8D4 100%);
  min-height: 81px;
  z-index: 2;
}


.box2 {
  max-width: 210px;
}

.logoright {
  text-align: right;
}

.logoright img {
  max-width: 170px;
}

.innerbody-page {
  padding: 0 15px;
}

.bg-gradient {
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  z-index: -1;
}

.bg-gradient:before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 145px;
  width: 100%;
  background: linear-gradient(90deg, #CCFAF7 0%, #FEF8D4 100%);
  z-index: -1;

}


.table-cardbox {
  background-color: var(--white-color);
  border: 1px solid var(--grey-color-100);
  border-radius: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.06);
}

.table-cardbox .table-title {
  padding: 10px;
  border-radius: 10px 10px 0 0px;
}

.cstm-tablebx tbody tr td {
  border-bottom: none;
}

.cstm-tablebx thead tr th {
  border-bottom:1px solid var(--grey-color-100);
  text-align: left;
}

.table-body {
  padding: 0 10px;
}

.cstm-tablebx thead tr th,
.cstm-tablebx tbody tr td {
  font-size: 11px;
  line-height: 1.1;
  font-weight: 700;
}

.cstm-tablebx thead tr th {
  color: var(--grey-color);
  text-transform: uppercase;
  padding: 8px 4px;
}

.cstm-tablebx tbody tr td {
  color: var(--secondary-color);
  padding: 2px 4px;
}

.cstm-tablebx thead tr th:first-child {
  padding-left: 0px;
}

.cstm-tablebx tbody tr td:first-child {
  padding-left: 0px;
}

.cstm-tablebx tbody tr:first-child td {
  padding-top: 8px;
}

.w-44 {
  width: 44%;
}

.w-100x {
  width: 100%;
  max-width: 100px;
}

.boder-bottom-grey {
  border-bottom: 1px solid var(--grey-color-100);
}
.boder-bottom-grey.cstm-hr{
border-bottom: none;
border-top:1px solid var(--grey-color-100);
}


.innercard-detail {
  padding: 0 10px;
}

.innercard-detail-bx .titlebx {
  padding: 0px 0 8px 0;
  text-transform: uppercase;
}

.innercard-detail-bx .subtitle {
  padding: 8px 0;
}

.cardbody-bxx {
  padding: 15px 10px 0 10px;
}

.cstm-hr {
  margin-top: 5px;
  margin-bottom: 5px;
}

.table-innercard {
  padding-bottom: 15px;
}

.gap-15 {
  gap: 15px 0;
}

.cardbx-main .innercardbx-body {
  padding-bottom: 15px;
}

.infocard-upper.cstm-row {
  display: flex;
  padding-bottom: 4px;
}

.infocard-upper.cstm-row .label-name {
  max-width: 140px;
  width: 100%;
}

.right-bx .infocard-upper.cstm-row .label-name {
  max-width: 110px;
}

.h-100 {
  height: 100%;
}

.cardgreybx {
  border: 1px solid solid var(--grey-color-100);
  border-radius: 10px;
  background-color: var(--grey-color-200);
  padding: 10px 15px;
}

.edu-innercard-bx {
  padding-bottom: 10px;
}

.edu-innercard-bx:last-child {
  padding-bottom: 0px;
}

.infocard-upper {
  line-height: 1;
}

.cstm-tablebx {
  margin-bottom: 8px;
  width: 100%;
}

.smlcard-bx .infocard-upper.cstm-row .label-name {
  max-width: 105px;
}

.pb-15 {
  padding-bottom: 15px;
}

.card-footer-iiner {
  padding: 10px 15px 4px 15px;
}

.page-break {
  page-break-after: always;
  clear: both;
}

.reference-cardbx .table-cardbox {
  background-color: var(--grey-color-200);
}

.reference-cardbx .infocard-upper.cstm-row .label-name,
.reference-cardbx .infocard-upper.cstm-row .desc-name {
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
}

.reference-cardbx .infocard-upper.cstm-row .label-name {
  max-width: 46%;
}

.reference-cardbx .infocard-upper.cstm-row .desc-name {
  max-width: 54%;
}

.reference-cardbx .infocard-upper.cstm-row {
  margin: 0 -4px;
}

.refernce-outerbx.innercard-detail {
  padding: 4px 0 0 0px;
}

.refernce-infobx {
  padding: 6px 0;
}

.footer-totalcount .countbox {
  padding: 15px;
}

.count-listing {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.count-listing li {
  font-size: 11px;
  font-weight: 400;
  color: var(--secondary-color);
  line-height: 1.1;
  padding-right: 5px;
}

.count-listing li:last-child {
  padding-right: 0px;
}

.count-listing li .count-name {
  font-weight: 700;
}

.learning-tablebx .cstm-tablebx tbody tr td {
  font-weight: 400;
  vertical-align: middle;
}

.learning-tablebx .table-borderbx tbody tr td {
  border-bottom: 1px solid var(--grey-color-300);
  padding: 5px 4px;
}

.learning-tablebx .cstm-tablebx tbody tr td:first-child {
  padding-left: 0px;
}

.learning-tablebx .table-borderbx tbody tr .value-td {
  border-left: 1px solid var(--grey-color-300);
  width: 40px;
  text-align: center;
}

.learning-tablebx .table-borderbx tbody tr:last-child td {
  border-bottom: none;
}

.learning-tablebx .table-borderbx tbody tr:first-child td {
  border-top: 1px solid var(--grey-color-300);
}

.progress-linebar {
  display: block;
  height: 6px;
}

.w-8 {
  width: 80%;
}

.w-1 {
  width: 10%;
}

.w-2 {
  width: 20%;
}

.w-3 {
  width: 30%;
}

.w-4 {
  width: 40%;
}

.w-5 {
  width: 50%;
}

.w-6 {
  width: 60%;
}

.w-7 {
  width: 70%;
}

.w-9 {
  width: 90%;
}

.w-10 {
  width: 100%;
}

.pt-10 {
  padding-top: 10px;
}

.refernce-outerbx.pt-10 {
  padding-top: 10px;
}

.progressbar {
  padding-right: 10px;
}

.general-cardbx .innercard-detail-bx .subtitle {
  padding: 6px 0px 10px 0;
}

/*  new white page  */
.page-outermain {
  padding: 40px 30px 0 30px;
}

.boder-bottom-darkblack {
  border-bottom: 2px solid var(--black-color);
}

.titlesml {
  line-height: 1;
}

.border-top-black {
  border-top: 1px solid var(--black-color);
  opacity: 1;
}

.sml-dec {
  line-height: 1.1;
}

.px-60 {
  padding: 0 60px;
}

.box-md {
  max-width: 580px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.details-cardbxx {
  padding-top: 5px;
}

.sm-mt {
  margin-top: 0px;
  margin-bottom: 8px;
}

.photo-editbx.cstmrow {
  display: flex;
  align-items: center;
}

.photo-editbx.cstmrow .leftbx {
  max-width: 220px;
  width: 100%;
}
.wrapper{
  padding-bottom: 20px;
}


/* print media query */

@media print {
  .page-break {
    clear: both;
    page-break-after: always;
  }

  .bg-gradient {
    top: 0px;
  }

  .newpage-pt {
    padding-top: 30px !important;
  }

  .page-top-82 {
    padding-top: 82px !important;
  }
  .cstm-container{
    box-shadow: none !important;
  }
  .wrapper{
    padding-bottom: 0px;
  }
  .cstm-container {
    max-width:1600px;
  }
  .bg-gradient{
    max-width:1600px;
  }
}


`

