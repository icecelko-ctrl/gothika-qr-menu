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

function createButton({ className, text, active, onClick }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = active ? `${className} is-active` : className;
  button.textContent = text;
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

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  image.loading = "lazy";

  const tags = document.createElement("div");
  tags.className = "tags";
  item.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = `tag ${tagClass(tag)}`;
    tagElement.textContent = tag;
    tags.append(tagElement);
  });

  imageWrap.append(image, tags);

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
  detailsButton.textContent = "Подробнее";
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

  activeCategoryLabel.textContent = category.name;
  activeSubcategoryLabel.textContent = activeSubcategory ? activeSubcategory.name : "Все позиции";
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
