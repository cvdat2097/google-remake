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

const toggleTooltipGoogleAccount = event => {
    if (!STATE.tooltipGoogleAccount) {
        const foundTooltipGoogleAccount = document.getElementById(
            'tooltip-google-account'
        );

        if (!foundTooltipGoogleAccount) {
            throw new Error('Can not find google account tooltip.');
        }

        STATE.tooltipGoogleAccount = foundTooltipGoogleAccount;
    }

    const { tooltipGoogleAccount } = STATE;

    if (
        !tooltipGoogleAccount.style.display ||
        tooltipGoogleAccount.style.display === 'none'
    ) {
        closeAllTootips();

        tooltipGoogleAccount.style.display = 'block';
    } else {
        tooltipGoogleAccount.style.display = 'none';
    }

    event.stopPropagation();
};

// Add Event Listeners
const tooltipContainers = document.getElementsByClassName('tooltip-container');
for (const tooltip of tooltipContainers) {
    tooltip.addEventListener('click', e => e.stopPropagation());
}

document
    .getElementById('google-account-avatar')
    .addEventListener('click', toggleTooltipGoogleAccount);

document
    .getElementsByTagName('body')[0]
    .addEventListener('click', closeAllTootips);
