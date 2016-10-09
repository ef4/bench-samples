import Ember from 'ember';

export default Ember.Controller.extend({
  items: Array.from(new Array(500).keys()),

  showOuter: true,

  actions: {
    toggle: function() {
      var start = performance.now();

      this.set('delay', '');
      Ember.run.schedule('afterRender', this, function() {
        this.set('delay', performance.now() - start);
      });
    },

    outerToggle: function() {
      var start = performance.now();

      this.set('outerDelay', '');
      this.set('showOuter', !this.get('showOuter'));
      Ember.run.schedule('afterRender', this, function() {
        this.set('outerDelay', performance.now() - start);
      });
    }

  }
});
