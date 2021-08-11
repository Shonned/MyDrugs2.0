const shop = new Vue({
    el: '#shop',
    data: {
      shoppingCart: 0,
      quantityDrugs1: 0,
      quantityDrugs2: 0,
      quantityDrugs3: 0,
      quantityDrugs4: 0,
      quantityDrugs5: 0,
      quantityDrugs6: 0,
      quantityDrugs7: 0,
      quantityDrugs8: 0,
      items: [
      {
              id: 1,
              name: "#100",
              image: {
                  source: "./assets/items/100.png",
                  alt: "#100"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 2,
              name: "BLUE CLOVER",
              image: {
                  source: "./assets/items/blue_pill.png",
                  alt: "BLUE CLOVER"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 3,
              name: "GREEN SNOWFLAKE",
              image: {
                  source: "./assets/items/green_pill.png",
                  alt: "GREEN SNOWFLAKE"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 4,
              name: "BIG BOOMER",
              image: {
                  source: "./assets/items/grenade-pill.png",
                  alt: ""
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 5,
              name: "SMILING DEVIL",
              image: {
                  source: "./assets/items/pink_pill.png",
                  alt: "SMILING DEVIL"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 6,
              name: "PURPLE FLOWER",
              image: {
                  source: "./assets/items/purple_pill.png",
                  alt: "PURPLE FLOWER"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 7,
              name: "RED PILL",
              image: {
                  source: "./assets/items/red_pill.png",
                  alt: "RED PILL"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          },
          {
              id: 8,
              name: "CONFUSED",
              image: {
                  source: "./assets/items/yellow_pill.png",
                  alt: "CONFUSED"
              },
              inStock: true,
              quantity: 1,
              quantityDrugs: 0
          }
      ]
    },
    methods: {
      addToShoppingCart(amount) {
          this.shoppingCart += amount
          console.log(this.shoppingCart)
      },
      addQuantityDrugs1() {
        this.quantityDrugs1 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs1)
      },
      addQuantityDrugs2() {
        this.quantityDrugs2 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs2)
      },
      addQuantityDrugs3() {
        this.quantityDrugs3 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs3)
      },
      addQuantityDrugs4() {
        this.quantityDrugs4 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs4)
      },
      addQuantityDrugs5() {
        this.quantityDrugs5 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs5)
      },
      addQuantityDrugs6() {
        this.quantityDrugs6 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs6)
      },
      addQuantityDrugs7() {
        this.quantityDrugs7 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs7)
      },
      addQuantityDrugs8() {
        this.quantityDrugs8 += 1
        this.shoppingCart += 1
        console.log(this.quantityDrugs8)
      }
    }
})