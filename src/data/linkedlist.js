class LinkedList (item, loc, next) {
    this.item = item;
    this.loc = loc;
    this.next = next;

    const getNextVertex = () => {
        next = this.next;
        return next;
    }

    const updateItemAndLoc = (newItem="none", newLoc) {
        if (newItem === 'none' || newLoc === 'none') {
            return;
        }

        this.item = newItem;
        this.loc = newLoc;
    }
}

export default LinkedList;