let currentTab = document.getElementById('home_tab');
let currentTabDiv = document.getElementById('home_tab_div');

currentTab.style.color = 'rgb(249, 255, 196)';

document.querySelector('span#wrapper').childNodes.forEach(tab => {
  tab.addEventListener('click', () => {
    if(tab.id == currentTab.id) return;

    currentTab.style.color = '';
    currentTabDiv.classList.remove('current_tab');

    currentTab = tab;
    currentTabDiv = document.getElementById(tab.id + '_div');

    currentTab.style.color = 'rgb(249, 255, 196)';
    currentTabDiv.classList.add('current_tab');
  })
});