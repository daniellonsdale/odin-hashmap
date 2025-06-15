import { LinkedList } from "./LinkedList.js";

export class HashMap {
    loadFactor;
    capacity;
    arr;

    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        arr = new Array(capacity);
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
        //check current size of table and confirm whether to grow or not

        let hashCode = hash(key);

        if (!this.arr[hashCode]){
            this.arr[hashCode] = new LinkedList();
            this.arr[hashCode].append(key, value);
        }else if(this.arr[hashCode].containsKey(key)){
            this.arr[hashCode].changeValue(key, value);
        }else{
            this.arr[hashCode].append(key, value);
        }
    }

}