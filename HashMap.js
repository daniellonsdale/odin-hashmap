import { LinkedList } from "./LinkedList.js";

export class HashMap {
    loadFactor;
    capacity;
    entries;
    arr;

    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.entries = 0;
        this.arr = new Array(capacity);
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        this.checkCapacity();

        let hashCode = this.hash(key);

        if (!this.arr[hashCode]){
            this.arr[hashCode] = new LinkedList();
            this.arr[hashCode].append(key, value);
            this.entries++;
        }else if(this.arr[hashCode].containsKey(key)){
            this.arr[hashCode].changeValue(key, value);
        }else{
            this.arr[hashCode].append(key, value);
            this.entries++;
        }
    }

    get(key){
        for (let element of this.arr) {
            if (element && element.containsKey(key)) {
                return element.at(element.findKey(key)).value;
            }
        }
        return null;
    }


    has(key){
        for (let element of this.arr){
            if (element && element.containsKey(key)){
                return true;
            }
        }
        return false;
    }

    remove(key){
        for (let element of this.arr){
            if (element && element.remove(key)){
                this.reHash();
                return true;
            }
        }
        return false;
    }

    checkCapacity(){
        if (this.entries >= this.loadFactor * this.capacity){
            this.grow();
        }
    }

    grow(){
        this.capacity *= 2;
        const oldArr = this.arr;
        this.arr = new Array(this.capacity);
        this.entries = 0;

        for (let element of oldArr) {
            if (element) {
                for (let i = 0; i < element.size(); i++) {
                    const node = element.at(i);
                    this.set(node.key, node.value);
                }
            }
        }
    }

    reHash(){
        const oldArr = this.arr;
        this.arr = new Array(this.capacity);
        this.entries = 0;

        for (let element of oldArr) {
            if (element) {
                for (let i = 0; i < element.size(); i++) {
                    const node = element.at(i);
                    this.set(node.key, node.value);
                }
            }
        }
    }


}