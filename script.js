const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const sponsRef = urlParams.get("sponsref");

const queryParams = `?TABLE=SPONSORD&PK=SPONS_REF&PKValue=${sponsRef}&PHOTO_FIELD=PHOTO`;
const baseURL = `https://www.DenariOnline.com/donorservices/viewSQLPhoto.aspx`;

const imageURL = baseURL + queryParams;

const imageElement = document.getElementById("image");
imageElement.setAttribute("src", imageURL);
