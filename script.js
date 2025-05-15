
const box = document.getElementById('box');
const autoTriggerCheckbox = document.getElementById('autoTrigger');

function triggerAnimation()
{
    box.classList.remove('animate'); //Reset animation
    void box.offsetWidth; // force to reflow
    box.classList.add('animate');

};

//Saving the preference to localStorage
autoTriggerCheckbox.addEventListener('change', () => {
localStorage.setItem('autoTrigger', autoTriggerCheckbox.checked);
});

//On page load
window.load=() => {
const shouldAutoTrigger = localStorage.getItem('autoTrigger') === 'true';
autoTriggerCheckbox.checked = shouldAutoTrigger;
if(shouldAutoTrigger)
{
    triggerAnimation();
}
};