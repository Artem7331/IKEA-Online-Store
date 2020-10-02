import { getData } from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';

export const catalog = () => {
    const updateSubCatalog = generateSubCatalog();
    const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    overlay = document.createElement('div'),
    btnClose = document.querySelector('.btn-close'),
    subCatalog = document.querySelector('.subcatalog'),
    subcatalogHeader = document.querySelector('.subcatalog-header'),
    btnReturn = document.querySelector('.btn-return');

    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active');
        closeSubMenu();
    };

    const openSubMenu = event => {
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest('.catalog-list__item');
        if (itemList) {
            getData.subCatalog(target.textContent, (data) => {
                updateSubCatalog(target.textContent, data);
                subCatalog.classList.add('subopen');
            });
        }
    };

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };


    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', openSubMenu);
    subCatalog.addEventListener('click', event => {
        const btnReturn = event.target.closest('.btn-return');

        if (btnBurger) closeSubMenu();
    });

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            closeMenu();
        }
    });
};