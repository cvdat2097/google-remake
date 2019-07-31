const STATE = {
    tooltipGoogleAccount: null,
};

const closeAllTootips = () => {
    const tooltips = document.getElementsByClassName('tooltip-container');

    for (const tooltip of tooltips) {
        if (tooltip.style.display !== 'none') {
            tooltip.style.display = 'none';
        }
    }
};

const toggleTooltipById = (event, tooltipId) => {
    const foundTooltip = document.getElementById(tooltipId);

    if (!foundTooltip) {
        throw new Error(`Can not find ${tooltipId}.`);
    }

    if (!foundTooltip.style.display || foundTooltip.style.display === 'none') {
        closeAllTootips();

        foundTooltip.style.display = 'block';
    } else {
        foundTooltip.style.display = 'none';
    }

    event.stopPropagation();
};

// Add Event Listeners
const tooltipContainers = document.getElementsByClassName('tooltip-container');
for (const tooltip of tooltipContainers) {
    tooltip.addEventListener('click', e => e.stopPropagation());
}

document
    .getElementsByClassName('google-account-avatar')[0]
    .addEventListener('click', e =>
        toggleTooltipById(e, 'tooltip-google-account')
    );

document
    .getElementById('google-apps-button')
    .addEventListener('click', e =>
        toggleTooltipById(e, 'tooltip-google-apps')
    );

document
    .getElementsByTagName('body')[0]
    .addEventListener('click', closeAllTootips);

// Google Apps tooltip scrolling
const showGoogleAppsScrollBar = () => {
    const tooltip = document.getElementById('google-apps-tooltip-body');
    const moreButton = document.getElementById('goolge-apps-more');

    tooltip.style.overflowY = 'scroll';
    moreButton.style.display = 'none';
};

const hideGoogleAppsScrollBar = () => {
    const tooltip = document.getElementById('google-apps-tooltip-body');
    const moreButton = document.getElementById('goolge-apps-more');

    tooltip.style.overflowY = 'hidden';
    moreButton.style.display = 'block';
};

const googleAppsWheelHandler = e => {
    if (e.deltaY > 0) {
        showGoogleAppsScrollBar();
    }
};

const googleAppsScrollHandler = e => {
    if (e.srcElement.scrollTop === 0) {
        hideGoogleAppsScrollBar();
    }
};

const scrollGoogleAppsToBottom = () => {
    showGoogleAppsScrollBar();
    const tooltip = document.getElementById('google-apps-tooltip-body');

    let scrollDelta = 1;
    let scrollSum = 0;

    const scrollInterval = setInterval(() => {
        if (scrollSum < tooltip.scrollHeight / 2) {
            scrollDelta += 10;
            scrollSum += scrollDelta;

            tooltip.scrollTop = scrollSum;
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
};

document
    .getElementById('google-apps-tooltip-body')
    .addEventListener('wheel', googleAppsWheelHandler);

document
    .getElementById('google-apps-tooltip-body')
    .addEventListener('scroll', googleAppsScrollHandler);

document
    .getElementById('goolge-apps-more')
    .addEventListener('click', scrollGoogleAppsToBottom);
