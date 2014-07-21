window.SkypeButton = {
  init: function(container, options) {
    var setupOnce = false;

    var setupButton = function() {
      if (setupOnce) {
        return;
      } else {
        setupOnce = true;
      }

      var skypeOptions = {};

      if (options.functions.length === 1) {
        skypeOptions.name = options.functions[0].toLowerCase();
      } else if (options.functions.length === 2) {
        skypeOptions.name = 'dropdown';
      } else {
        return;
      }

      var elementId = 'eager-skype-button-' + options.username + '-' + Math.floor(Math.random() * 999999);
      skypeOptions.element = elementId;
      container.id = elementId;

      skypeOptions.participants = [options.username];
      skypeOptions.imageSize = parseInt(options.imageSize, 10);

      if (skypeOptions.imageColor === 'white') {
        skypeOptions.imageSize = skypeOptions.imageColor;
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
