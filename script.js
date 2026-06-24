const categoryTabs = document.querySelector("#categoryTabs");
const subcategoryTabs = document.querySelector("#subcategoryTabs");
const menuGrid = document.querySelector("#menuGrid");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const itemsCount = document.querySelector("#itemsCount");
const activeCategoryLabel = document.querySelector("#activeCategoryLabel");
const activeSubcategoryLabel = document.querySelector("#activeSubcategoryLabel");
const detailsModal = document.querySelector("#detailsModal");
const modalImage = document.querySelector("#modalImage");
const modalMeta = document.querySelector("#modalMeta");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");

let activeCategoryId = window.menuData[0].id;
let activeSubcategoryId = "all";
let searchQuery = "";

const drinkSubcategories = new Set([
  "Авторские коктейли",
  "Коктейли",
  "Чай и кофе",
  "Безалкогольные",
  "Пиво и вино"
]);

const categoryIcons = {
  popular:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3c.2 2.7-1.7 3.8-3 5.5-1 1.3-1.4 2.8-1 4.6.7-1.2 1.7-2 3.2-2.5-.8 2.3.4 3.6 1.6 5 .7.8 1.2 1.6 1.1 2.7 1.9-1.1 3.1-3.1 3.1-5.5 0-3.4-2.5-5-5-9.8Z"/><path d="M8.8 15.5c-.4 2.6 1.4 5.5 4.4 5.5"/></svg>',
  kitchen:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v8"/><path d="M4.5 3v7.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V3"/><path d="M7 13v8"/><path d="M16.5 3c2.2 2.5 2.4 6.7.4 9.6-.5.7-.9 1.6-.9 2.5V21"/><path d="M19.5 3v18"/></svg>',
  bar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14l-2 7a5 5 0 0 1-10 0L5 4Z"/><path d="M12 16v5"/><path d="M8 21h8"/></svg>',
  hookah:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v5"/><path d="M9 8h6"/><path d="M10 8l1 5h2l1-5"/><path d="M12 13v7"/><path d="M8 20h8"/><path d="M14 14c4 0 5 2 5 4 0 1.7-1.3 3-3 3"/><path d="M17 18h3"/></svg>',
  promo:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.4 5 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8L12 3Z"/><path d="M4 20h16"/></svg>'
};

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function getActiveCategory() {
  return window.menuData.find((category) => category.id === activeCategoryId);
}

function getItems(category) {
  const visibleSubcategories =
    activeSubcategoryId === "all"
      ? category.subcategories
      : category.subcategories.filter((subcategory) => subcategory.id === activeSubcategoryId);

  return visibleSubcategories.flatMap((subcategory) =>
    subcategory.items.map((item) => ({
      ...item,
      categoryName: category.name,
      subcategoryName: subcategory.name
    }))
  );
}

function getFilteredItems() {
  const items = getItems(getActiveCategory());
  const query = normalize(searchQuery);

  if (!query) {
    return items;
  }

  return items.filter((item) => {
    const searchable = [item.name, item.description, item.size, item.categoryName, item.subcategoryName, ...item.tags]
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });
}

function createButton({ className, text, active, onClick, icon, id }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = active ? `${className} is-active` : className;

  if (id) {
    button.dataset.category = id;
  }

  if (icon && categoryIcons[icon]) {
    const iconElement = document.createElement("span");
    iconElement.className = "tab__icon";
    iconElement.innerHTML = categoryIcons[icon];

    const label = document.createElement("span");
    label.className = "tab__label";
    label.textContent = text;

    button.append(iconElement, label);
  } else {
    button.textContent = text;
  }

  button.addEventListener("click", onClick);
  return button;
}

function renderCategories() {
  categoryTabs.innerHTML = "";

  window.menuData.forEach((category) => {
    categoryTabs.append(
      createButton({
        className: "tab",
        text: category.name,
        id: category.id,
        icon: category.id,
        active: category.id === activeCategoryId,
        onClick: () => {
          activeCategoryId = category.id;
          activeSubcategoryId = "all";
          render();
          document.querySelector(".menu-shell").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      })
    );
  });
}

function renderSubcategories() {
  const category = getActiveCategory();
  subcategoryTabs.innerHTML = "";

  subcategoryTabs.append(
    createButton({
      className: "subtab",
      text: "Все",
      active: activeSubcategoryId === "all",
      onClick: () => {
        activeSubcategoryId = "all";
        render();
      }
    })
  );

  category.subcategories.forEach((subcategory) => {
    subcategoryTabs.append(
      createButton({
        className: "subtab",
        text: subcategory.name,
        active: subcategory.id === activeSubcategoryId,
        onClick: () => {
          activeSubcategoryId = subcategory.id;
          render();
        }
      })
    );
  });
}

function tagClass(tag) {
  const classes = {
    "Хит": "tag--hit",
    "Новинка": "tag--new",
    "Острый": "tag--spicy"
  };

  return classes[tag] || "";
}

function itemKind(item) {
  if (item.categoryName === "Бар" || drinkSubcategories.has(item.subcategoryName)) {
    return "drink";
  }

  if (item.categoryName === "Кальяны") {
    return "hookah";
  }

  return "food";
}

function openDetails(item) {
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalMeta.textContent = `${item.categoryName} / ${item.subcategoryName} / ${item.size}`;
  modalTitle.textContent = item.name;
  modalDescription.textContent = item.description;
  modalPrice.textContent = formatPrice(item.price);
  detailsModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDetails() {
  detailsModal.hidden = true;
  document.body.style.overflow = "";
}

function createCard(item, index) {
  const article = document.createElement("article");
  const kind = itemKind(item);
  article.className = `menu-card menu-card--${kind}`;
  article.style.animationDelay = `${Math.min(index * 45, 240)}ms`;

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image";

  if (item.image) {
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.loading = "lazy";
    imageWrap.append(image);
  } else {
    imageWrap.classList.add("card-image--fallback");
    const fallback = document.createElement("span");
    fallback.textContent = item.subcategoryName;
    imageWrap.append(fallback);
  }

  const tags = document.createElement("div");
  tags.className = "tags";
  item.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = `tag ${tagClass(tag)}`;
    tagElement.textContent = tag;
    tags.append(tagElement);
  });

  imageWrap.append(tags);

  const body = document.createElement("div");
  body.className = "card-body";

  const titleRow = document.createElement("div");
  titleRow.className = "card-title-row";
  const title = document.createElement("h3");
  title.textContent = item.name;
  titleRow.append(title);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = item.description;

  const footer = document.createElement("div");
  footer.className = "card-footer";

  const priceBlock = document.createElement("div");
  const price = document.createElement("div");
  price.className = "price";
  price.textContent = formatPrice(item.price);
  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `<span>${item.size}</span><span>${item.subcategoryName}</span>`;
  priceBlock.append(price, meta);

  const detailsButton = document.createElement("button");
  detailsButton.type = "button";
  detailsButton.className = "details-btn";
  detailsButton.textContent = "+";
  detailsButton.setAttribute("aria-label", `Подробнее: ${item.name}`);
  detailsButton.addEventListener("click", () => openDetails(item));

  footer.append(priceBlock, detailsButton);
  body.append(titleRow, description, footer);
  article.append(imageWrap, body);

  return article;
}

function updateHeadings(items) {
  const category = getActiveCategory();
  const activeSubcategory =
    activeSubcategoryId === "all"
      ? null
      : category.subcategories.find((subcategory) => subcategory.id === activeSubcategoryId);

  activeCategoryLabel.textContent = activeSubcategory ? category.name : "Меню";
  activeSubcategoryLabel.textContent = activeSubcategory ? activeSubcategory.name : category.name;
  itemsCount.textContent = `${items.length} ${items.length === 1 ? "позиция" : "позиций"}`;
}

function renderItems() {
  const items = getFilteredItems();
  menuGrid.innerHTML = "";
  updateHeadings(items);

  items.forEach((item, index) => {
    menuGrid.append(createCard(item, index));
  });

  emptyState.hidden = items.length > 0;
}

function render() {
  renderCategories();
  renderSubcategories();
  renderItems();
}

searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderItems();
});

detailsModal.querySelector(".modal__backdrop").addEventListener("click", closeDetails);
detailsModal.querySelector(".modal__close").addEventListener("click", closeDetails);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailsModal.hidden) {
    closeDetails();
  }
});

render();
