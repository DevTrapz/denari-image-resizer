const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const sponsRef = urlParams.get("sponsref");

const queryParams = `?TABLE=SPONSORD&PK=SPONS_REF&PKValue=${sponsRef}&PHOTO_FIELD=PHOTO`;
const baseURL = `https://www.DenariOnline.com/donorservices/viewSQLPhoto.aspx`;

const imageURL = baseURL + queryParams;

const imageElement = document.getElementById("image");

imageElement.onerror = function () {
  console.log("Image failed to load. Switching to placeholder.");
  this.src =
    "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="; // Your backup image

  this.onerror = null;
};

imageElement.setAttribute("src", imageURL);
