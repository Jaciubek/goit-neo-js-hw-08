## goit-neo-js-hw-08


## Final homework assignment (individual final project):


## Task. Image gallery

Creating a gallery is a complex task that is best broken down into several simpler sub-tasks. By completing each one, you will get closer to the final goal. This process is called task decomposition.



1. Gallery markup

It makes sense to start by creating the container to which we will add the gallery elements. To do this, add a gallery container tag in the HTML code—an unordered list with the class gallery.

<ul class="gallery"></ul>



2. Image array

To create gallery elements, you will need data. Add this array of objects to your JavaScript file. 

Each object represents one gallery element.

preview — a link to the small version of the image for the gallery card.
original — a link to the large version of the image for the modal window.
description — a text description of the image for the alt attribute of the small image and the caption of the large image in the modal.

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



3. Gallery element markup

You have a container to which you can add gallery elements and the data to create them. It’s time to fill the gallery with markup.

Use the images object array and this HTML template for a gallery element to create the markup in JavaScript, then add all the markup inside ul.gallery. Do not add any HTML tags other than those contained in this template.

<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

In the src attribute of the <img> tag, specify the link to the small version of the image.
Use the image description for the alt attribute.
The link to the large image should be stored in the data-source attribute on the <img> element and specified in the link's href.
Note that the image is wrapped in a link whose href attribute points to the image file path. Clicking on it can cause the image to be downloaded to the user’s computer. Disable this behaviour by default.



4. Styles

Add styling to the gallery according to the layout.



5. Delegation

It’s time to add the functionality to listen for clicks on gallery elements and get the link to the large image when clicked. Use the delegation technique on ul.gallery for this. When clicking on a gallery element, log the link to the large image to the console.



6. Connecting the library

The basicLightbox пlibrary provides a fully functional modal window, perfect for our task. Use the jsdelivr CDN service and add links to the library's minified (.min) JS and CSS files in the HTML file.



7. Modal window

Update your code so that clicking on a gallery element opens the modal window of the connected library. To learn how to initialise the modal window in your code and how to use it, refer to the documentation and examples.



8. Large image

Use your code to get the link to the large image to replace the src attribute value of the <img> element in the modal window before opening it. Use the ready-made modal window markup with an image from the basicLightbox examples.



## Requirements
- Code must be formatted with Prettier.
- There must be no errors or warnings in the console after running the tasks.
- Execution of tasks 1, 2 and 3.

## Formatting the code with Prettier:

* You must have Node.js installed, then install Prettier in your project. This can be done with the command in the terminal:

```bash
npm install --save-dev prettier
```

* Then you can run Prettier on your code with:

```bash
npx prettier --write .
```

This command will format all files in the project.
