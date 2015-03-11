function BinaryTreeNode(data, left, right)
{
    this.data = data;
    this.left = left;
    this.right = right;
    this.height = 0;//记录树的层级关系
    return this;
}

function BinaryTree()
{
    this.root = null;
}



BinaryTree.create_avl_tree_from_array = function(data)
{
    var binary_tree = new BinaryTree();

    return binary_tree;
}


BinaryTree.prototype.insert_to_avl_tree = function(data)
{
    this._insert_to_avl_tree(this.root,data);
    return this.root;
}
BinaryTree.prototype._refresh_tree_height = function(binary_tree_node)
{
    if (binary_tree_node.left == null && binary_tree_node.right == null) return 0;
    if (binary_tree_node.left == null) return binary_tree_node.right.height;
    if (binary_tree_node.right == null) return binary_tree_node.left.height;
    return (binary_tree_node.left.height > binary_tree_node.right.height ?
        binary_tree_node.left.height : binary_tree_node.right.height) + 1;
}

BinaryTree.prototype._insert_to_avl_tree = function(binary_tree_node ,data)
{
    if (binary_tree_node == null)    binary_tree_node = new BinaryTreeNode(data, null, null);
    else if (binary_tree_node.data < data)
    {
        this._insert_to_avl_tree(binary_tree_node.left,data);
        if (binary_tree_node.left == binary_tree_node.right + 2)
        {
            binary_tree_node = data < binary_tree_node.left.data ?
                this._single_rotate_with_left(binary_tree_node) : this._double_rotate_with_left(binary_tree_node)
        }
    }
    else if (binary_tree_node.data > data)
    {
        this._insert_to_avl_tree(binary_tree_node.right,data);
        if (binary_tree_node.right == binary_tree_node.left + 2)
        {
            binary_tree_node = data > binary_tree_node.right.data ?
                this._single_rotate_with_right(binary_tree_node) : this._double_rotate_with_right(binary_tree_node)
        }
    }
    binary_tree_node.height = this._refresh_tree_height(binary_tree_node)
}

BinaryTree.prototype._single_rotate_with_left = function(binary_tree_node)
{
    var temp = binary_tree_node.left;
    binary_tree_node.left = temp.right;
    temp.right = binary_tree_node;

    binary_tree_node.height =(binary_tree_node.left.height > binary_tree_node.right.height ?
        binary_tree_node.left.height : binary_tree_node.right.height) + 1;

    temp.height = (temp.left.height > temp.right.height ?
        temp.left.height : temp.right.height) + 1;
    return temp;
}

BinaryTree.prototype._single_rotate_with_right = function(binary_tree_node)
{
    var temp = binary_tree_node.right;
    binary_tree_node.left = temp.right;
    temp.right = binary_tree_node;

    binary_tree_node.height = (binary_tree_node.left.height > binary_tree_node.right.height ?
        binary_tree_node.left.height : binary_tree_node.right.height) + 1;

    temp.height = (temp.left.height > temp.right.height ?
        temp.left.height : temp.right.height) + 1;
    return temp;
}


BinaryTree.prototype._double_rotate_with_left = function(binary_tree_node)
{
    binary_tree_node.left = this._single_rotate_with_right(binary_tree_node.left);
    return (this._single_rotate_with_left(binary_tree_node));
}
BinaryTree.prototype._double_rotate_with_left = function(binary_tree_node)
{
    binary_tree_node.right = this._single_rotate_with_left(binary_tree_node.right);
    return (this._single_rotate_with_right(binary_tree_node));
}
