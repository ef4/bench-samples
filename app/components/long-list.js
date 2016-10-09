import Ember from 'ember';

export default Ember.Component.extend({
  items: Array.from(new Array(5000).keys())
});
