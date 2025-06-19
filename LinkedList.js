import { Node } from "./Node.js";

export class LinkedList{
    head;
    constructor(){
        this.head = new Node();
    }
    append(key, value){
        let newNode = new Node(key, value);
        if (this.head.nextNode === null){
            this.head.nextNode = newNode;
        }else{
            let cur = this.head.nextNode;
            while (cur.nextNode != null) {
                cur = cur.nextNode;
            }
            cur.nextNode = newNode;
        }
    }
    prepend(key, value){
        let newNode = new Node(key, value);
        newNode.nextNode = this.head.nextNode;
        this.head.nextNode = newNode;
    }
    size(){
        let sum = 0;
        let cur = this.head.nextNode;
        while (cur != null) {
            sum++;

            cur = cur.nextNode;
        }
        return sum;
    }
    getHead(){
        if(this.head.nextNode){
            return this.head.nextNode;
        }else{
            return null;
        }
    }
    getTail(){
        let cur = this.head;
        while (cur.nextNode != null) {
            cur = cur.nextNode;
        }
        return cur;
    }
    at(index) {
        let cur = this.head.nextNode;
        let i = 0;
        while (cur !== null) {
            if (i === index) {
                return cur;
            }
            cur = cur.nextNode;
            i++;
        }
        return null;
    }
    pop(){
        let cur = this.head;
        while (cur.nextNode.nextNode != null) {
            cur = cur.nextNode;
        }
        cur.nextNode = null;
    }
    containsValue(value){
        let cur = this.head;
        let bool = false;
        while (cur != null) {
            if(cur.value === value){
                bool = true;
            }
            cur = cur.nextNode;
        }
        return bool;
    }
    containsKey(key){
        let cur = this.head;
        let bool = false;
        while (cur != null) {
            if(cur.key === key){
                bool = true;
            }
            cur = cur.nextNode;
        }
        return bool;
    }
    changeValue(key, value){
        let cur = this.head;
        while (cur != null) {
            if(cur.key === key){
                cur.value = value;
            }
            cur = cur.nextNode;
        }
    }
    findValue(value){
        let cur = this.head;
        let curIndex = -1;
        while (cur != null) {
            if(cur.value === value){
                return curIndex;
            }
            cur = cur.nextNode;
            curIndex++;
        }
        return null;
    }
    findKey(key){
        let cur = this.head;
        let curIndex = -1;
        while (cur != null) {
            if(cur.key === key){
                return curIndex;
            }
            cur = cur.nextNode;
            curIndex++;
        }
        return null;
    }
    remove(key){
        let cur = this.head;
        let prev;
        while (cur != null) {
            if(cur.key === key){
                prev.nextNode = cur.nextNode;
                return true;
            }
            prev = cur;
            cur = cur.nextNode;
        }
        return false;
    }
    toString() {
        let output = "";
        let cur = this.head.nextNode;
        const visited = new Set(); // track visited nodes

        while (cur != null) {
            if (visited.has(cur)) {
                output += "(cycle detected)";
                break;
            }
            visited.add(cur);
            output += `( ${cur.key}, ${cur.value} ) -> `;
            cur = cur.nextNode;
        }

        output += "null";
        return output;
    }
}