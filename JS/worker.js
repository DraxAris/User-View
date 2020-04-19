//JQUERY needed
wasModified = false;
$('#body').click(function(){
    wasModified = true;
    //in case click mean it was modified and you should notify user
    alert('Page was modified');
});
