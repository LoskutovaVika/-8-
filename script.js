const BlogsElem = document.getElementById('list');
const imagePaths = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg','images/6.jpg']

function AddBlogToList(blog) {
  let NewDiv = document.createElement('div');
  NewDiv.classList.add('blog');
  let newTitle = document.createElement('h2');
  newTitle.classList.add('blogTitle');
  let NewP = document.createElement('p');

  //выбор картинки из массива imagePath
  const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
  let newImage = document.createElement('img');
  newImage.src = randomImagePath;
  newImage.alt = "newImage";
  newImage.classList.add('blog-image');

  newTitle.textContent = blog['title'];
  NewP.textContent = blog['body'];

  NewDiv.append(newTitle);
  NewDiv.append(newImage)
  NewDiv.append(NewP);
  BlogsElem.append(NewDiv);
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
}).then((response) => response.json()).then((json) => json.forEach((blog) => AddBlogToList(blog)))
