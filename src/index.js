/* eslint-disable no-magic-numbers */

function initToolTips() {
    const $tooltips = document.querySelectorAll('.tooltip');

    $tooltips.forEach(tip => {
        tip.addEventListener('mouseover', (e) => {
            const text = e.target.dataset.tooltip;
            const $toolTip = document.createElement('span');
            $toolTip.textContent = text;
            $toolTip.className = 'tooltip-content';
            e.target.append($toolTip);
        });
        tip.addEventListener('mouseout', (e) => {
            e.target.querySelector('.tooltip-content').remove();
        });
    });
}
initToolTips();

