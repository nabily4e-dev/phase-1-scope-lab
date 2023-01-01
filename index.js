// Write your solution in this file!
window.customerName = 'bob';

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBest) {
  window.bestCustomer = newBest;
}

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}
