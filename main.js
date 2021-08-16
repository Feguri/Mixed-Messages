/*
This program will generate a random message.
*/
// @ts-check
class randomMessage {
    constructor() {
        this.nouns = ['apple', 'juice', 'banana', 'fries', 'unicorn', 'potato']
        this.adjectives = ['lucky', 'positive', 'bad', 'explosive', 'bananas']
    }

    /**
     * @param {string} list
     */
    retrieveRandomItemFromList(list){
        switch(list){
            case 'nouns':
                return this.nouns[Math.round(Math.random() * this.nouns.length - 1)]
            case 'adjectives':
                return this.adjectives[Math.round(Math.random() * this.adjectives.length)]
            default:
                return 'poop'
        }
    }
    returnRandomMessage() {
        return `I am ${this.retrieveRandomItemFromList('adjectives')} and this ` + 
        `${this.retrieveRandomItemFromList('nouns')} is very ${this.retrieveRandomItemFromList('adjectives')}`
    }
};
let obj = new randomMessage();
console.log(obj.returnRandomMessage());
