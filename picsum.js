const getButton = document.getElementById("img_buttn");
// const imgResult = document.getElementById('img_display')

const getImg = async () => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=2&limit=100.jpg`
  );
  const data = await response.json();
  console.log(data);
  let mainCon = document.getElementById("main_con");
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    //  declaring variabes
    let imageContainer = document.createElement("div");
    let imageTag = document.createElement("img");
    let authorName = document.createElement("p");
    let ImageId = document.createElement("p");

    //

    imageTag.src = data[i].download_url;
    imageTag.setAttribute("style", "width: 500px");

    ImageId.innerHTML = data[i].id;
    authorName.innerHTML = data[i].author;
    imageContainer.appendChild(imageTag);
    imageContainer.appendChild(authorName);
    imageContainer.appendChild(ImageId);
    mainCon.appendChild(imageContainer);
  }
};

getButton.addEventListener("click", getImg());

// data.map(img => {

//   console.log(img.download_url)

//   return

// `<div class=images>
// // <img src=${img.download_url} alt="" />
// // <p> this is the author ${img.author}, this is the id ${img.id}
// // </div>`
