import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.run.schedule('afterRender', this, function() {
      Ember.run.later(() => {
        performance.mark('secondRenderStart');
        this.set('secondRender', true);
        Ember.run.schedule('afterRender', this, function() {
          performance.mark('renderEnd');
          requestAnimationFrame(function () {
            // after paint
            requestAnimationFrame(function () {
              document.location.href = "about:blank";
            });
          });
        });
      }, 2000);
    });
  }
});
