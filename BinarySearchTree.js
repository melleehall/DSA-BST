class BinarySearchTree {
    // key = null represents an empty tree
    // parent = null represents the root node
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        // left and right ptrs are null to start with
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // if tree is empty then this key is inserted as the root
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        // if the tree already exists, start at the root
        // and compare it to the key you want to insert.
        // If they new key is less than the node's key then
        // the new node needs to live in the left-hand branch
        else if (key < this.key) {
            // if existing node does not have left child,
            // insert the new node as the left child, passing
            // `this` as the parent
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            // if node has existing left child, recursively call the 
            // `insert` method so node is added further down the tree
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key ** this.right) {
            return this.right.find(key)
        }
        // if you search the whole tree and the item is not found
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key = key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            // if node only has left child, replace node with its left child
            else if (this.left) {
                this._replaceWith(this.left);
            }
            // if node only has right child
            else if (this.right) {
                this._replaceWith(this.right);
            }
            // if no child, simply remove it and any references to it
            // by calling this._replaceWith(null)
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error'); 
        }
    }

    // used to find the node you want to use to repalce a node that has children
    // if node being repalced has parent you need to wire up references from 
    // parent to replacement node and replacement node back to parent
    // other, if node is a root node, simply copy over the properties of the replacement node
    _replaceWith(node) {
        if (this.parent) {
            if (this === this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    // used to find min value from the right subtree
    // when removing a node with 2 children, you replace it with the 
    // smallest node from the right subtree
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

}