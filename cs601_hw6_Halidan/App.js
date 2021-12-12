Vue.prototype.index = 0;
export default {
    name: "App",
    computed: {
      pictureHover () {
        let index = Vue.prototype.index;
        if (this.hover == true) {
          index = (index + 1) % this.pics.length;
        }
        Vue.prototype.index = index;
        return this.pics[index].path;
      }
    },
    data () {
      return {
        pics : [
            {
                age: 'oneYear',
                path: 'images/oneyear.jpg'
            },
            {
                age: 'fiveMonths',
                path: 'images/fivemonths.jpg'
            },
            {
                age: 'threeMonths',
                path: 'images/threemonths.jpg'
            },
            {
                age: 'twoMonths',
                path: 'images/twomonths.jpg'
            },
        ],
        hover: false
      }
    },
    template: `
        <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false">
      `
  };
  