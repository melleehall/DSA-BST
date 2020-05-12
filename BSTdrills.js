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