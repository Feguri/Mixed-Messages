/*
This program will generate a random message.
*/
// @ts-check
class randomMessage {
    constructor() {
        this.nouns = ['apple', 'juice', 'banana', 'fries', 'unicorn', 'potato', 'carrot', 'person', 'building', 'legos', 'car', 'book', 'city', 'country',
                      'Lego set', 'website', 'programming language', 'planet', 'keyboard', 'pony', 'monke', 'food', 'store', 'pool', 'forest', 'bus'];
        this.adjectives = ['lucky', 'delicious', 'bad', 'explosive', 'bananas', 'good', 'flattered', 'angry', 'sad', 'fun', 'funny', 'amusing', 'incredible',
                           'excellent', 'vibrant', 'hopeful', 'neat', 'nice', 'notorious', 'fool', 'dumb', 'intelligent', 'charismatic', 'happy'];
        this.adjectivesPastTense = ['exploded', 'harmed', 'fished', 'stepped', 'puked', 'nailed', 'jumped', 'fallen', 'opressed', 'rotated', 'measured', 
                                    'dragged', 'destroyed', 'constructed', 'plagiarised', 'contributed', 'worked', 'manufactured', 'broke', 'fixed'];
        this.interminglers = ['but', 'that', 'and', 'however', 'and', 'but', 'that', 'because'];
        this.places = ['pizzeria', 'park', 'mall', 'wilderness', 'forest', 'desert', 'swamp', 'permafrost', 'city', 'house', 'trail', 'train', 'mountain',
                       'restaurant', 'field', 'concert', 'tourist attraction', 'factory', 'alien planet', 'wasteland', 'road', 'reserve', 'school'];
        this.people = ['Albert Einstein', 'Pope', 'Trump', 'Putin', 'Shrek', 'Dr. Bashir', 'Major Kira', 'Elon Musk', 'Hitler', 'God', 'Popeye'];
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
            case 'places':
                return this.getRandomItem(this.places);
            case 'people':
                return this.getRandomItem(this.people);
            default:
                return 'poop';
        }
    }
    returnRandomMessage() {
        const phrases = [`I am ${this.retrieveRandomItemFromList('adjectives')} ${this.retrieveRandomItemFromList('inter')} this ` + 
        `${this.retrieveRandomItemFromList('nouns')} is very ${this.retrieveRandomItemFromList('adjectives')}.`,
        `Have you ever ${this.retrieveRandomItemFromList('adjPast')} in someone's ${this.retrieveRandomItemFromList('nouns')}?`,
        `You are ${this.retrieveRandomItemFromList('adjectives')} ${this.retrieveRandomItemFromList('inter')} ` + 
        `${this.retrieveRandomItemFromList('adjectives')}.`, `We should hang out in a ${this.retrieveRandomItemFromList('places')}` + 
        `, it will be ${this.retrieveRandomItemFromList('adjectives')}!`, `What do you think is ${this.retrieveRandomItemFromList('people')}'s ` +
        `favorite ${this.retrieveRandomItemFromList('nouns')}?`];

        return this.getRandomItem(phrases);
    }
};
let obj = new randomMessage();

console.log('\n' + obj.returnRandomMessage());


