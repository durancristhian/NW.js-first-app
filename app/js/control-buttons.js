var nw = require("nw.gui");
var win = nw.Window.get();

win.isMaximixed = false;

win.on("maximize", function ()   { win.isMaximixed = true; });
win.on("unmaximize", function () { win.isMaximixed = false; });

$(document).on("ready", function () {

  $("#show-dev-tools").on("click", showDevTools);
  $("#minimize").on("click", minimize);
  $("#maximize").on("click", maximize);
  $("#close").on("click", close);
});

function close ()        { win.close(); }
function maximize () {
  if (win.isMaximixed) {
    $("#button-maximize span").removeClass().addClass("ion-arrow-expand");
    win.unmaximize();
  }
  else {
    $("#button-maximize span").removeClass().addClass("ion-arrow-shrink");
    win.maximize();
  }

  win.isMaximixed = !win.isMaximixed;
}
function minimize ()     { win.minimize(); }
function showDevTools () { win.showDevTools(); }