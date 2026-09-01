// count the length of LL


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(4);


const length = (head) => {
    let count = 0;
    let current = head;


    while(current){
        count += 1;
        current = current.next;

    }

    return count;
}

console.log(length(list));