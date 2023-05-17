const targetNode = document.querySelector(".view-conversation");
const observer = new MutationObserver(function(){
  if(!targetNode.classList.contains('hidden')){
    const chat = document.querySelector('.content-message-container');
    chat.scrollTop = chat.scrollHeight ;
  }
});
observer.observe(targetNode, { attributes: true, childList: false });