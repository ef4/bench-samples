import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.run.schedule('afterRender', this, function() {
      performance.mark('renderEnd');
      requestAnimationFrame(function () {
        // after paint
        requestAnimationFrame(function () {
          document.location.href = "about:blank";
        });
      });
    });
  }
});
