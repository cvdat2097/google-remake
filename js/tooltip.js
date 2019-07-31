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
