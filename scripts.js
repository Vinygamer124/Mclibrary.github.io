function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = (field.type === 'password') ? 'text' : 'password';
}