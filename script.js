/* =========================================================
   Module 8.2 JavaScript - Bacolod Coffee Beans Shop
   ========================================================= */

// 1. Declare constants and running total
const shopName = "Bacolod Coffee Shop";
const currentYear = new Date().getFullYear(); // Dynamic year (2026)
let runningTotal = 0;

// Product dataset for dynamic shop calculations
const shopProducts = [
  { id: "origami", name: "Origami House Blend (250g)", price: 450, stock: 25 },
  { id: "kanlaon", name: "Mt. Kanlaon Dark Roast (250g)", price: 480, stock: 15 },
  { id: "muscovado", name: "Muscovado Cold Brew Pack", price: 380, stock: 30 }
];

// 2. Perform genuine JavaScript calculations
const totalProducts = shopProducts.length;

// Calculate total inventory valuation using array reduction
const totalCatalogValue = shopProducts.reduce((sum, item) => sum + (item.price * item.stock), 0);

// Calculate average price per bag
const averagePrice = (
  shopProducts.reduce((sum, item) => sum + item.price, 0) / totalProducts
).toFixed(2);

// Add default item price to the running total
runningTotal += shopProducts[0].price;

// 3. Log at least three labelled values to the console
console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Total Products in Catalog:', totalProducts);
console.log('Average Bean Price (PHP):', averagePrice);
console.log('Total Estimated Inventory Value (PHP):', totalCatalogValue);
console.log('Initial Cart Running Total (PHP):', runningTotal);

// 4. Update DOM elements dynamically on load
document.addEventListener("DOMContentLoaded", () => {
  // Update Shop Name
  const brandTitleElem = document.getElementById("brand-title");
  if (brandTitleElem) {
    brandTitleElem.textContent = shopName;
  }

  // Update Dynamic Copyright Line in Footer
  const footerElem = document.getElementById("copyright-notice");
  if (footerElem) {
    footerElem.textContent = `© ${currentYear} Vincent Rev D. Verso | ${shopName}`;
  }

  // Render Genuine Computed Value onto Page
  const computedStatsElem = document.getElementById("shop-computed-val");
  if (computedStatsElem) {
    computedStatsElem.textContent = `Catalog Overview: ${totalProducts} Premium Coffee Bags Available • Average Price: ₱${averagePrice} • Total Store Stock Valuation: ₱${totalCatalogValue.toLocaleString()}.00`;
  }
});
