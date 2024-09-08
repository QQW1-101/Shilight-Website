const switchTab = (event, tabName) => {
  for(const activeTab of document.getElementsByClassName('active')) {
    activeTab.className = activeTab.className.replace(' active','');
  }
  
  let newActiveTab = document.getElementById(tabName)
  newActiveTab.className += ' active';
}