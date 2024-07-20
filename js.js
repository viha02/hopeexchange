// Get the form and promo code container elements
const form = document.getElementById('plastic-exchange-form');
const promoCodeContainer = document.getElementById('promo-code-container');
const promoCodeElement = document.getElementById('promo-code');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the amount of plastic entered by the user
  const plasticAmount = document.getElementById('plastic-amount').value;

  // Generate a promo code based on the plastic amount
  const promoCode = generatePromoCode(plasticAmount);

  // Display the promo code
  promoCodeElement.textContent = promoCode;
  promoCodeContainer.style.display = 'block';
});

// Function to generate a promo code based on the plastic amount
function generatePromoCode(plasticAmount) {
  // For demonstration purposes, we'll generate a simple promo code
  // In a real-world scenario, you would want to use a more secure method
  const promoCode = `PLASTIC${plasticAmount}OFF`;
  return promoCode;
}