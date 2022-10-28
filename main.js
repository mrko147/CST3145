let app = new Vue({
  el: "#App",
  data: {
    // Storing image path and alt in data
    path: "https://cdn-icons-png.flaticon.com/512/221/221945.png",
    text: "Maths Icon",
    // Creating object to store subject data in
    subjects: {
      spaces: "5",
      subject: "Math",
      location: "London",
      price: 100,
    },
  },
  methods: {
    // Method to decrement space by 1 when user clicks Add to Cart button
    decrementSpaces: function () {
      // Condition to ensure number of space is greater than 0
      if (this.subjects.spaces > 0) {
        // If true then decrement value by  1
        this.subjects.spaces--;
      }
    },
  },
});
