// Check Off Specific Todos By Clicking
$("ul").on('click', 'li', function() {
  $(this).toggleClass("completed");
});

$("ul").on('click', 'span', function(e) {
  removeParentOfThis($(this));
  e.stopPropagation();
});

$("input[type='text']").on('keypress', function(e){
  enterClicked(e, $(this));
});

$(".fa-plus").on('click', function(){
  $("input[type='text']").fadeToggle();
})

// Function Declarations
var enterClicked = function(event, el){
  if (event.which === 13) {
    var todoText = el.val();
    el.val("");
    $("ul").append(`<li><span><i class="fa fa-trash"></i> </span>${todoText}</li>`);    
  }
}

var removeParentOfThis = function(el){
  var child = el.parent();
  child.fadeOut(500, function(){
    $(this).remove();
  });
};