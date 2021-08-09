document.querySelector('.root-nav').onclick = function(e){
    if(e.target.nodeName !=='SPAN') return;
    closeAllSubMenu(e.target.nextElementSibling);
    e.target.classList.add('sub-menu-active-span');
    e.target.nextElementSibling.classList.toggle('sub-menu-active');
}

function closeAllSubMenu(current = null){
    let parents = [];
    if(current){
        let currentParent = current.parentNode;
        while(currentParent){
            if(currentParent.classList.contains('root-nav')) break;
            if(currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }
    }
    const subMenu = document.querySelectorAll('.root-nav ul');
    Array.from(subMenu).forEach((item) => {
        //текущая проверка
        if(item != current && !parents.includes(item)) {
            item.classList.remove('sub-menu-active');
            if(item.previousElementSibling.nodeName === 'SPAN'){
                item.previousElementSibling.classList.remove('sub-menu-active-span');
            }
        }
    });
}

document.querySelector('.root-nav').onmouseleave = closeAllSubMenu;