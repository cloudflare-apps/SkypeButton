window.SkypeButton = {
  init: function(container, options) {
    var skypeOptions = {};

    if (options.functions.length === 1) {
      skypeOptions.name = options.functions[0].toLowerCase();
    } else if (options.functions.length === 2) {
      skypeOptions.name = 'dropdown';
    } else {
      return;
    }

    // Skype requires a div
    var div = document.createElement('div');
    container.appendChild(div);

    // And requires its ID has "SkypeButton" in it
    var elementId = 'SkypeButton_Call_' + options.username + '_' + Math.floor(Math.random() * 999999);
    div.id = elementId;
    skypeOptions.element = elementId;

    skypeOptions.participants = [options.username];
    skypeOptions.imageSize = parseInt(options.imageSize, 10);

    if (skypeOptions.imageColor === 'white') {
      skypeOptions.imageSize = skypeOptions.imageColor;
    }

    var setupButton = function() {
      var setupOnce = false;

      if (setupOnce) {
        return;
      } else {
        setupOnce = true;
      }

      Skype.ui(skypeOptions);
    };

    var head = document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.onreadystatechange = function () {
      if (this.readyState == 'complete') {
        setupButton();
      }
    }
    script.onload = setupButton;
    script.src = 'http://www.skypeassets.com/i/scom/js/skype-uri.js';
    head.appendChild(script);
  }
};
