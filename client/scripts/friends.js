var Friends = {
  toggleStatus: function(friend) {
    var array = Array.prototype.slice.apply(document.querySelector('#chats').children);
    array.forEach(c => {
      if (c.children[0].innerText === friend) {
        c.classList.add('friend');
      }
    });

  }
};