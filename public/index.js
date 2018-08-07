/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Hello from Vue.js!",
      message2: "vuejs is a thing",
      message3: "some other sort of message",
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread!",
          rating: 5,
          reviewer: "Burton Wax"
        },
        {
          text: "I love Vue.js, especially when I'm programming!",
          rating: 4,
          reviewer: "Emily Post"
        },
        {
          text: "Vue.js is waaaaay better than Chinese Checkers.",
          rating: 2,
          reviewer: "Angela Pearson"
        }
      ],
      newReview: {text: "", reviewer: "", rating: ""}
    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      console.log('add to the review');
      // add the data from the form into the reviews array
      // find the data from the form
      // console.log(this.newReview);
      // find the array
      // console.log(this.reviews);
      // add the data from the form into the array
      var newReviewInfo = {
        text: this.newReview.text,
        rating: this.newReview.rating,
        reviewer: this.newReview.reviewer
      };
      this.reviews.push(newReviewInfo);
    },
    isPositive: function(inputReview) {
      console.log('running isPositive');
      return !inputReview.text.includes('bad');
      // return true if 'bad' does NOT exist
      // return false if 'bad' does exist
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
