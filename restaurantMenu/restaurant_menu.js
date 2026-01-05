const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseMenuItem = '';
mainCourseMenu.forEach(((item, index) => {mainCourseMenuItem += `<p>Item ${index + 1}: ${item}</p>`;}));
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItem;

let dessertMenuItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertMenuItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItem;