/*
This program will generate a random message.
*/
// @ts-check
class randomMessage {
    constructor() {
        this.nouns = ['apple', 'juice', 'banana', 'fries', 'unicorn', 'potato']
        this.adjectives = ['lucky', 'positive', 'bad', 'explosive', 'bananas']
    }
    returnRandomMessage() {
        return `I am ${this.adjectives[Math.round(Math.random() * this.adjectives.length)]} and this 
                ${this.nouns[Math.round(Math.random() * this.nouns.length)]} is very 
                ${this.adjectives[Math.round(Math.random() * this.adjectives.length)]}`
    }
};
let obj = new randomMessage();
console.log(obj.returnRandomMessage());
