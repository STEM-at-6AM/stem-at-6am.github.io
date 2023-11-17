
function showDropdown(btn) {
    
    drop = btn.nextElementSibling;

    if (drop.style.display === '') {
        btn.style.color = '#b51515';
        drop.style.display = 'block';
    } else {
        btn.style.color = '#300000';
        drop.style.display = '';
    }

}