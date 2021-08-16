/*
This program will generate a random message.
*/
// @ts-check
class randomMessage {
    constructor() {
        this.nouns = ['apple', 'juice', 'banana', 'fries', 'unicorn', 'potato']
        this.adjectives = ['lucky', 'delicious', 'bad', 'explosive', 'bananas']
    }
    /**
    * @param {Array} arr
    */
    getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }

    /**
     * @param {string} list
     */
    retrieveRandomItemFromList(list){
        switch(list){
            case 'nouns':
                console.log(this.nouns.length);
                return this.getRandomItem(this.nouns);
            case 'adjectives':
                return this.getRandomItem(this.adjectives);
            default:
                return 'poop';
        }
    }
    returnRandomMessage() {
        const phrases = [`I am ${this.retrieveRandomItemFromList('adjectives')} and this ` + 
        `${this.retrieveRandomItemFromList('nouns')} is very ${this.retrieveRandomItemFromList('adjectives')}`];
        return this.getRandomItem(phrases);
    }
};
let obj = new randomMessage();
console.log(obj.returnRandomMessage());
