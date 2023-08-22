const GeneratePdf = async (page) => {
  const data = await page.evaluate(() => {
    const pageHeight = 950;
    let totalHeight = 0;
    let pageHtml = document.createElement("div");

    const pageData = {
      pageNo: 0,
      container: "",
      containerHeight: 0,
      gradient: "",
      header: "",
      sections: [],
      sectionHeader: "",
      subSections: [],
      tableRows: [],
      profileCol1Rows: [],
      profileCol2Rows: [],
      test: "",
    };

    // to check page no
    const pageNo = (page) => {
      if (page.classList.contains("personal-info")) return 1;
      else if (page.classList.contains("reference")) return 2;
      else if (page.classList.contains("referenceby")) return 3;
    };

    // to check section height
    const getSectionHeight = (element) => {
      const section = document.querySelector(".temp");

      section.replaceChildren(element);
      return section.offsetHeight;
    };

    //to handle Profile Data--------------------------------------------

    const drawPage = (pageData, pageHtml) => {
      const outerDiv = document.createElement("div");
      outerDiv.classList.add("cstm-container");
      outerDiv.classList.add("pb-15");
      const innerBodyPage = document.createElement("div");
      innerBodyPage.classList.add("innerbody-page");
      if (pageData.pageNo === 2) {
        innerBodyPage.classList.add("row");
      }
      outerDiv.insertAdjacentHTML("beforeend", pageData.gradient);
      outerDiv.insertAdjacentHTML("beforeend", pageData.header);
      for (let sec of pageData.sections) {
        innerBodyPage.insertAdjacentHTML("beforeend", sec.outerHTML);
      }

      outerDiv.insertAdjacentElement("beforeend", innerBodyPage);
      pageHtml.insertAdjacentHTML("beforeend", outerDiv.outerHTML);
      pageHtml.insertAdjacentHTML(
        "beforeend",
        '<div class="page-break"></div>'
      );
    };

    const drawSection = (header, subSections, pageNo) => {
      const eduDiv = document.createElement("div");
      eduDiv.classList.add(pageNo === 3 ? "cardbx-main" : "education-card");
      eduDiv.classList.add("pt-15");
      const tableCardBox = document.createElement("div");
      tableCardBox.classList.add("table-cardbox");
      const cardBody = document.createElement("div");
      cardBody.classList.add("cardbody-bxx");
      for (let subSec of subSections) {
        cardBody.insertAdjacentHTML("beforeend", subSec);
      }

      tableCardBox.insertAdjacentHTML("beforeend", header);
      tableCardBox.insertAdjacentElement("beforeend", cardBody);
      eduDiv.insertAdjacentElement("beforeend", tableCardBox);
      return eduDiv;
    };

    const updatePageData = (pageData) => {
      pageData.sections = [];
      pageData.sectionHeader = "";
      pageData.subSections = [];
      pageData.tableRows = [];
    };

    const drawProfileSections = (containerHeight, sec) => {
      const sectionClone = sec.cloneNode(true);

      const sectionHeader = sectionClone.querySelector(".table-title");

      pageData.sectionHeader = sectionHeader.outerHTML;

      const subSections = sectionClone.querySelector(".cardbody-bxx")?.children;
      // return
      const sectionChidrenClone = [...subSections];

      totalHeight += 15;

      if (sectionChidrenClone?.length) {
        for (let subSec of sectionChidrenClone) {
          const innerCardHeight = getSectionHeight(subSec);
          if (totalHeight + innerCardHeight < pageHeight) {
            totalHeight += innerCardHeight;
            pageData.subSections.push(subSec.outerHTML);
          }
          // continued logic
          else {
              if (pageHeight - totalHeight > 100) {
                const innerCard = handleProfileSubSections(subSec)
                pageData.subSections.push(innerCard)
              }
            const section = drawSection(
              pageData.sectionHeader,
              pageData.subSections,
              pageData.pageNo
            );
            pageData.sections.push(section);
            //----draw page
            drawPage(pageData, pageHtml);

            // remove subsection and subsections header
            updatePageData(pageData);
            totalHeight = containerHeight + innerCardHeight;

            //----calculation of remaing section data
            if (
              !sectionHeader.querySelector("h3").innerHTML.includes("Continued")
            ) {
              sectionHeader.querySelector("h3").innerHTML =
                sectionHeader.querySelector("h3").innerHTML + "(Continued)";
            }
            pageData.sectionHeader = sectionHeader.outerHTML;

            // if data is present in card inner section rows
              if (pageData.profileCol1Rows.length || pageData.profileCol2Rows.length) {
                let cols = []
                const col1 = drawCol(pageData.profileCol1Rows)

                cols.push(col1)
                pageData.profileCol1Rows = []
                const col2 = drawCol(pageData.profileCol2Rows)

                cols.push(col2)
                pageData.profileCol2Rows = []
                const innerCard = drawProfileSubSection(cols)
                pageData.subSections.push(innerCard.outerHTML)
              } else
            pageData.subSections.push(subSec.outerHTML);
          }
        }

        const section = drawSection(
          pageData.sectionHeader,
          pageData.subSections,
          pageData.pageNo
        );
        pageData.sections.push(section);
        pageData.subSections = [];
        totalHeight = containerHeight + getSectionHeight(section);
      }
    };

      const handleProfileSubSections = (subSec) => {
        const rowData = subSec.querySelector(".row")
        const cloneSubSec = rowData.cloneNode(true)

        const secCols = cloneSubSec.children

        const div = document.createElement("div");
        div.classList.add("row");
        let cols = []
        let counter = 0;

        for (let column of secCols) {
          counter += 1

          let tHeight = totalHeight
          const colChildren = [...column.children]
          for (let row of colChildren) {

            div.insertAdjacentHTML("beforeend", row.outerHTML);
            const sectionHeight = getSectionHeight(div);

            if (tHeight + sectionHeight < pageHeight) {
              if (counter === 1)
                pageData.profileCol1Rows.push(row);
              else pageData.profileCol2Rows.push(row);
              tHeight += sectionHeight
            }
            else {
              div.removeChild(div.lastChild);
              if (counter === 1) {
                const col = drawCol(pageData.profileCol1Rows)
                cols.push(col)
                pageData.profileCol1Rows = []
              }
              else {
                const col = drawCol(pageData.profileCol2Rows)
                cols.push(col)
                pageData.profileCol2Rows = []
              }
              if (counter === 1)
                pageData.profileCol1Rows.push(row);
              else pageData.profileCol2Rows.push(row);
              tHeight = 0
              break;
              div.replaceChildren([]);
              div.insertAdjacentHTML("beforeend", row.outerHTML);
            }
            break;
            div.replaceChildren([]);
          }
        }
        const innerCard = drawProfileSubSection(cols)
        return innerCard.outerHTML
      }

    const drawCol = (rows) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-md-6");
      for (let r of rows) {
        colDiv.insertAdjacentElement("beforeend", r);
      }
      return colDiv;
    };

    const drawProfileSubSection = (cols) => {
      const outerDiv = document.createElement("div");
      outerDiv.classList.add("edu-innercard-bx");
      const cardGeryBox = document.createElement("div");
      cardGeryBox.classList.add("cardgreybx");
      const innerRow = document.createElement("div");
      innerRow.classList.add("row");
      for (const col of cols) {
        innerRow.insertAdjacentElement("beforeend", col);
      }
      cardGeryBox.insertAdjacentElement("beforeend", innerRow);
      outerDiv.insertAdjacentElement("beforeend", cardGeryBox);

      return outerDiv;
    };

    const profileInfo = (sections, containerHeight) => {
      for (let sec of sections) {
        if (totalHeight + sec.clientHeight < pageHeight) {
          //update total height
          totalHeight += sec.clientHeight;

          pageData.sections.push(sec);
        } else {
          //to check how much space left in a page
          let remainingHeight = pageHeight - totalHeight;
          if (remainingHeight > 50) {
            drawProfileSections(containerHeight, sec);
          } else {
            drawPage(pageData, pageHtml);
            updatePageData(pageData);
            totalHeight = containerHeight;
            if (totalHeight + sec.clientHeight < pageHeight) {
              totalHeight += sec.clientHeight;
              pageData.sections.push(sec);
            } else {
              drawProfileSections(containerHeight, sec);
            }
          }
        }
      }
      drawPage(pageData, pageHtml);
      updatePageData(pageData);
    };

    //----------------------------------------------------------

    //reference page--------------------------------------------
    const referencePage = (
      pageData,
      pageHtml,
      pageHeight,
      sections
    ) => {
      const row = document.createElement("div");
      row.classList.add("row");
    
      for (let sec of sections) {
        row.insertAdjacentHTML("beforeend", sec.outerHTML);
        const sectionHeight = getSectionHeight(row);
        if (totalHeight + sectionHeight < pageHeight) {
          pageData.sections.push(sec);
        } else {
          row.removeChild(row.lastChild);
          drawPage(pageData, pageHtml);
          updatePageData(pageData);
          pageData.sections.push(sec);
          row.replaceChildren([]);
          row.insertAdjacentHTML("beforeend", sec.outerHTML);
        }
      }
      drawPage(pageData, pageHtml);
      updatePageData(pageData);
    };

//-----------------------------------------------------------------------------------

//refernece By page -------------------------------------------------------------
const drawRefByPageSubSection = (rows) => {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("learning-tablebx");

  const table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("cstm-tablebx");
  table.classList.add("table-borderbx");
  const tableBody = document.createElement("tbody");
  for (let r of rows) {
    tableBody.insertAdjacentHTML("beforeend", r.outerHTML);
  }
  table.insertAdjacentElement("beforeend", tableBody);
  outerDiv.insertAdjacentElement("beforeend", table);
  return outerDiv.outerHTML;
};

const referenceByPage = (
  pageData,
  pageHtml,
  pageHeight,
  sections,
  containerHeight
) => {
  for (let sec of sections) {
    if (totalHeight + sec.clientHeight < pageHeight) {
      //update total height
      totalHeight += sec.clientHeight;

      pageData.sections.push(sec);
    } else {

      //to check how much space left in a page
      const remainingHeight = pageHeight - totalHeight;
      if (remainingHeight > 50) {
        const sectionClone = sec.cloneNode(true);

        const sectionHeader = sectionClone.querySelector(".table-title");

        pageData.sectionHeader = sectionHeader.outerHTML;

        const subSections =
          sectionClone.querySelector(".cardbody-bxx")?.children;

        const sectionChidrenClone = [...subSections];

        totalHeight += 15;

        if (sectionChidrenClone?.length) {
          let isPageCompleted = true;

          for (let subSec of sectionChidrenClone) {
            const innerCardHeight = getSectionHeight(subSec);
            if (totalHeight + innerCardHeight < pageHeight) {
              totalHeight += innerCardHeight;
              pageData.subSections.push(subSec.outerHTML);
            }
            // continued logic
            else {
              let tRows = [];
              const tableRows = subSec.querySelector("tbody")?.children;
              if (tableRows?.length) {
                tRows = [...tableRows];
                for (let row of tRows) {
                  const rowHeight = getSectionHeight(row);

                  if (totalHeight + rowHeight < pageHeight) {
                    totalHeight += rowHeight;
                    pageData.tableRows.push(row);
                  } else {
                    if (isPageCompleted) {
                      const table = drawRefByPageSubSection(pageData.tableRows);
                      pageData.subSections.push(table);
                      const section = drawSection(
                        pageData.sectionHeader,
                        pageData.subSections,
                        pageData.pageNo
                      );
                      pageData.sections.push(section);
                      //----draw page
                      drawPage(pageData, pageHtml);
                      // remove subsection and subsections header
                      updatePageData(pageData);
                      //----calculation of remaing section data
                      sectionHeader.querySelector("h3").innerHTML =
                        sectionHeader.querySelector("h3").innerHTML +
                        "(Continued)";
                      pageData.sectionHeader = sectionHeader.outerHTML;
                      pageData.tableRows.push(row);
                      isPageCompleted = false;
                    } else {
                      pageData.tableRows.push(row);
                    }
                  }
                }
              } else {
                if (isPageCompleted) {
                  const section = drawSection(
                    pageData.sectionHeader,
                    pageData.subSections,
                    pageData.pageNo
                  );
                  pageData.sections.push(section);
                  //----draw page
                  drawPage(pageData, pageHtml);

                  // remove subsection and subsections header
                  updatePageData(pageData);

                  //----calculation of remaing section data

                  sectionHeader.querySelector("h3").innerHTML =
                    sectionHeader.querySelector("h3").innerHTML + "(Continued)";

                  pageData.sectionHeader = sectionHeader.outerHTML;

                  pageData.subSections.push(subSec.outerHTML);

                  isPageCompleted = false;
                } else {
                  pageData.subSections.push(subSec.outerHTML);
                }
              }

              const table = drawRefByPageSubSection(pageData.tableRows);
              pageData.subSections.push(table);
              const section = drawSection(
                pageData.sectionHeader,
                pageData.subSections,
                pageData.pageNo
              );
              totalHeight = containerHeight + getSectionHeight(section);
              pageData.tableRows = [];
            }
          }
          const section = drawSection(
            pageData.sectionHeader,
            pageData.subSections,
            pageData.pageNo
          );
          pageData.sections.push(section);

          // if there is only single subsection and the page height met
          if (pageHeight - totalHeight < 100) {
            drawPage(pageData, pageHtml);
            updatePageData(pageData);
            totalHeight = containerHeight
            pageData.subSections = [];
          }
          else {
            totalHeight = containerHeight + getSectionHeight(section);
            pageData.subSections = [];
          }
        }
      } else {
        drawPage(pageData, pageHtml);
        updatePageData(pageData);
        totalHeight = containerHeight;
        if (totalHeight + sec.clientHeight < pageHeight) {
          totalHeight += sec.clientHeight;

          pageData.sections.push(sec);
        }
      }
    }
  }
  drawPage(pageData, pageHtml);
  updatePageData(pageData);
};
//-------------------------------------------------------------------------------

    const mainWrapper = document.querySelector(".main-wrapper");
    const pages = mainWrapper?.children ? mainWrapper.children : [];


    for (let page of pages) {
      totalHeight = 0;
      pageData.pageNo = pageNo(page);
      //clone page to pageClone so that it doesn't effect the original dom and we can manipulate the cloned dom
      const pageClone = page.cloneNode(true);

      //delete all elements from section
      let parentElement = pageClone.querySelector(".cstm-container");
      parentElement.replaceChildren([]);
      pageData.container = parentElement.outerHTML;

      //custom container
      const container = pageClone.querySelector(".cstm-container");
      //
      let containerClone = container.cloneNode(true);

      // get gradient
      const gradient = page.querySelector(".bg-gradient").outerHTML;

      pageData.gradient = gradient;

      //update dom insert grdient
      containerClone.insertAdjacentHTML("beforeend", gradient);

      // get header from dom
      const header = page.querySelector(".header-box").outerHTML;

      pageData.header = header;

      //add header inside container
      containerClone.insertAdjacentHTML("beforeend", header);

      const containerHeight = getSectionHeight(containerClone);

      totalHeight += containerHeight;

      pageData.containerHeight = containerHeight;

      const sections = page.querySelector(".innerbody-page")?.children;
      if (pageData.pageNo === 2) {
        referencePage(pageData, pageHtml, pageHeight, sections);
      } else if (pageData.pageNo === 3) {
        referenceByPage(
          pageData,
          pageHtml,
          pageHeight,
          sections,
          containerHeight
        );
      } else {
        if (sections) profileInfo(sections, containerHeight);
      }
    }
    return pageHtml.outerHTML
    // return pageData;
  });
  return data;
};

module.exports = {
  GeneratePdf,
};
