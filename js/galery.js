import { images } from './images.js';

const el = (tag, props) => Object.assign(document.createElement(tag), props);

const createModal = ({ original, description }) =>
    `<img class="${"lightbox-gallery-image"}" src="${original}" alt="${description}"/>`

const createGalleryItem = ({ preview, original, description }) => {
    const li = el("li", { className: "gallery-item" });
    
    const a = el("a", { className: "gallery-link", href: original });
    
    const img = el("img", { className: "gallery-image", src: preview, alt: description });
    img.dataset["source"] = original;


    const lightbox = basicLightbox.create(createModal({ original, description }));

    a.addEventListener("click", (event) => {
        event.preventDefault();
        lightbox.show();
    });

    a.append(img);
    li.append(a);
    return li;
};

const galleryItems = images.map(createGalleryItem);
const gallery = document.querySelector("ul.gallery");

gallery.append(...galleryItems);