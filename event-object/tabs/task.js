const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const activeTab = document.querySelector('.tab_active');
        const activeTabContent = document.querySelector('.tab__content_active');

        activeTab.classList.remove('tab_active');
        item.classList.add('tab_active');

        activeTabContent.classList.remove('tab__content_active');
        tabContent[index].classList.add('tab__content_active');
    });
});