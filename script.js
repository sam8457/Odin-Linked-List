class Node {
    value = null;
    nextNode = null;

    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    firstNode = null;

    constructor(value, nextNode){
        this.firstNode = new Node(value, nextNode);
    }

    append(value) {
        let currentNode = this.firstNode;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value);
    }

    prepend(value) {
        this.firstNode = new Node(value, this.firstNode);
    }

    size() {
        let count = 1;
        let currentNode = this.firstNode;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return count;
    }

    head() {
        return this.firstNode.value;
    }

    tail() {
        let currentNode = this.firstNode;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    at(index){
        let currentNode = this.firstNode;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    pop() { // finds last and 2nd to last nodes, deletes value and link, resp.
        let currentNode = this.firstNode;
        let priorNode = currentNode;
        while (currentNode.nextNode != null) {
            priorNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        currentNode.value = null;
        priorNode.nextNode = null;
    }

    popAlt() { // makes a new list and adds all but last node
        let newLinkedList = new LinkedList(this.firstNode.value);
        let currentNode = this.firstNode.nextNode;
        while (currentNode.nextNode != null) {
            newLinkedList.append(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        this.firstNode = newLinkedList.firstNode;
    }

    contains(value) {
        let currentNode = this.firstNode;
        while (currentNode.nextNode != null) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.firstNode;
        let index = 0;
        while (currentNode.nextNode != null) {
            if (currentNode.value == value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        if (currentNode.value == value) { // needed if its at the last node, else the while loop would skip it
            return index;
        }
        return null;
    }

    toString() {
        let str = "( ";
        let currentNode = this.firstNode;
        while (currentNode.nextNode != null) {
            str += currentNode.value + " ) -> ( "
            currentNode = currentNode.nextNode;
        }
        str += currentNode.value + " ) -> null"
        return str;
    }
}

let myLinkedList = new LinkedList("Alice");
myLinkedList.append("Bob");
myLinkedList.prepend("Charlie");
// list should now go: Charlie -> Alice -> Bob
console.log(myLinkedList);
console.log(myLinkedList.size());
console.log(myLinkedList.head());
console.log(myLinkedList.tail());
console.log(myLinkedList.at(1));
myLinkedList.pop();
// list should now go: Charlie -> Alice
console.log(myLinkedList.tail());
console.log(myLinkedList.contains("Charlie"));
console.log(myLinkedList.contains("Reginald"));
console.log(myLinkedList.find("Alice"));
console.log(myLinkedList.find("Reginald"));
myLinkedList.append("Donald");
myLinkedList.prepend("Ericka");
console.log(myLinkedList.toString());