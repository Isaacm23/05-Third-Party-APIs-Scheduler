
  function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`.content`).text(value);
    
var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let eventId = $(this).attr('id');
    let eventText = $(this).parent().siblings().children('.content').val();
    localStorage.setItem(eventId, eventText);
        })}}