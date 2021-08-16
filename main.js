/*
This program will generate a random message.
*/
// @ts-check
class randomMessage {
    constructor() {
        this.nouns = ['apple', 'juice', 'banana', 'fries', 'unicorn', 'potato', 'carrot', 'person', 'building', 'legos', 'Shrek'];
        this.adjectives = ['lucky', 'delicious', 'bad', 'explosive', 'bananas', 'good', 'flattered', 'angry', 'sad', 'opressed'];
        this.adjectivesPastTense = ['exploded', 'harmed', 'fished', 'stepped', 'puked', 'nailed', 'jumped', 'fallen'];
        this.interminglers = ['but', 'that', 'and', 'however', 'of', 'and', 'but', 'that'];
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
                return this.getRandomItem(this.nouns);
            case 'adjectives':
                return this.getRandomItem(this.adjectives);
            case 'adjPast':
                return this.getRandomItem(this.adjectivesPastTense);
            case 'inter':
                return this.getRandomItem(this.interminglers);
            default:
                return 'poop';
        }
    }
    returnRandomMessage() {
        const phrases = [`I am ${this.retrieveRandomItemFromList('adjectives')} ${this.retrieveRandomItemFromList('inter')} this ` + 
        `${this.retrieveRandomItemFromList('nouns')} is very ${this.retrieveRandomItemFromList('adjectives')}.`,
        `Have you ever ${this.retrieveRandomItemFromList('adjPast')} in someone's ${this.retrieveRandomItemFromList('nouns')}?`];

        return this.getRandomItem(phrases);
    }
};
let obj = new randomMessage();
for(let i = 0; i < 15; i++){
    console.log('\n' + obj.returnRandomMessage());
}

