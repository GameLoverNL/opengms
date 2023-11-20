const createCallDialog = document.querySelector('#create-call-dialog');
const createCallButton = document.querySelector('#create-call-button');
const cancelCreateCall = document.querySelector('#create-call-cancel');


const callDialog = document.querySelector('#call-dialog');
const callCancelButton = document.querySelector('#call-cancel');

createCallButton.addEventListener('click', () => {
    createCallDialog.showModal();
})

cancelCreateCall.addEventListener('click', () => {
    createCallDialog.close();
})

callCancelButton.addEventListener('click', () => {
    callDialog.close();
})