假设已经存在一个二叉树,我们从这个二叉树中删除一个数据，基本思路如下：

1.找到要删除的数据对应的二叉树的节点，我们叫这个节点为f节点。

2.向f节点的左子树延伸找到左子树中值最大的节点，我们称这个节点为max节点

3.用max节点的的数据替代f节点的数据，并删除max节点。

因为max节点的位置必然在树的边缘位置，max节点最多只有棵子树，能有效的避免有两棵子树时删除节点，子树无法处理的问题。

请在remove\_data\_in\_tree中添加二叉树删除数据的代码，函数的参数是要删除的数据，如果数据存在删除该数据，如果数据不存在则树不发生改变。