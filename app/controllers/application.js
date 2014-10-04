import Ember from 'ember';

export default Ember.Controller.extend({
  selectedGender: null,
  genders: ['', 'female', 'male'],

  predictedScore: function() {
    var sum = parseInt(this.get('mcat')) + parseInt(this.get('age'));
    if (this.get('selectedGender') === 'female') {
      sum = sum * 1.2;
    }
    return sum;
  }.property('selectedGender', 'mcat', 'age')
});
