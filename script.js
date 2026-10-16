/* =========================================================
   Module 8.1 JavaScript - Bacolod Coffee Beans Shop
   ========================================================= */

// 1. Declare constants and running counter
const shopName = "Bacolod Coffee Shop";
const currentYear = new Date().getFullYear(); // Dynamic year
let cartItemCount = 0;

// Data array for calculated store metrics
const productReviews = [
  { name: "Origami Blend", rating: 4.9, stockBags: 25 },
  { name: "Kanlaon Dark", rating: 5.0, stockBags: 15 },
  { name: "Muscovado Pack", rating: 4.8, stockBags: 30 }
];

// 2. Computed values using JavaScript
const totalProducts = productReviews.length;
const totalStock = productReviews.reduce((sum, item) => sum + item.stockBags, 0);
const avgRating = (
  productReviews.reduce((sum, item) => sum + item.rating, 0) / totalProducts
).toFixed(1);

// 3. Log at least three labelled values to browser console
console.log("Store Name:", shopName);
console.log("Current System Year:", currentYear);
console.log("Total Roasted Coffee Products:", totalProducts);
console.log("Total Bags in Stock:", totalStock);
console.log("Calculated Store Average Rating:", avgRating);

// 4. DOM Manipulation on page load
document.addEventListener("DOMContentLoaded", () => {
  // Populate Shop Name
  const brandTitleElem = document.getElementById("brand-title");
  if (brandTitleElem) {
    brandTitleElem.textContent = shopName;
  }

  // Populate Dynamic Copyright Line
  const footerElem = document.getElementById("copyright-notice");
  if (footerElem) {
    footerElem.textContent = `© ${currentYear} Vincent Rev D. Verso | ${shopName}`;
  }

  // Populate JavaScript Calculated Metrics
  const computedStatsElem = document.getElementById("computed-stats");
  if (computedStatsElem) {
    computedStatsElem.textContent = `★ ${avgRating} Avg Rating across ${totalProducts} Direct-Farm Roasts (${totalStock} bags ready to ship)`;
  }
});
