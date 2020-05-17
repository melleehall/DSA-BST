import BinarySearchTree from './BinarySearchTree'

// 4. Create a binary search tree called BST and insert 
// 3,1,4,6,9,2,5,7 into your tree. Compare your result 
// with the result from the 1st exercise.

function makeIntTree() {
    const integers = [3,1,4,6,9,2,5,7];
  
    const BST = new BinarySearchTree()
  
    integers.forEach(int => BST.insert(int))
  
    console.log(BST)
  }
  
  makeIntTree()

// Create a binary search tree called BST and insert 
// E A S Y Q U E S T I O N into your tree. Compare your result 
// with the result from the 1st exercise.

function makeLetterTree() {
    const letters = [E, A, S, Y, Q, U, E, S, T, I, O, N];
  
    const BSTTwo = new BinarySearchTree()
  
    letters.forEach(letter => BSTTwo.insert(letter))
  
    console.log(BSTTwo)
  }
  
  makeLetterTree()

// 4. What does this program do?
// Without running this code in your code editor, 
// explain what the following program does. Show with 
// an example the result of executing this program. 
// What is the runtime of this algorithm?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

// Returns the sum of all values in the tree. It uses recursion to call 
// the function over and over while totaling up the subtrees. The general 
// case is return tree(t.left) + t.value + tree(t.right)
// Best case is the tree is just the root, O(n)
// Average case is a balanced tree, O(log(n))
// Worst case is a skewed tree and the general case has to be called each time O(n)


// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your 
// algorithm?

// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, 
// assuming the tree does not contain duplicates.

// 7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

// 8. Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in 
// distance from the root by more than 1).

// 9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two 
// binary search trees. Write a program that will tell whether the two BSTs will be identical 
// or not without actually constructing the tree. You may use another data structure such as 
// an array or a linked list but don't construct the BST. What is the time complexity of your 
// algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays 
// but will create the exact same BSTs and your program should return true.