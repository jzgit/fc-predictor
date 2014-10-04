import Ember from 'ember';

export default Ember.Controller.extend({
  selectedGender: null,
  genders: ['', 'female', 'male'],

  predictedScore: function() {
    // just making this up as an example
    var sum = (parseInt(this.get('mcat')) * 7) + (20 / parseInt(this.get('age')));
    if (this.get('selectedGender') === 'female') {
      sum = sum * 1.2;
    }
    return sum;
    // put all values here that should trigger a recalculation
  }.property('selectedGender', 'mcat', 'age')
});
