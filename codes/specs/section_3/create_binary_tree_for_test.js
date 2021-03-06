
BinaryTree.create_tree_from_array_for_test = function(data)
{
    var binary_tree = new BinaryTree();

    for(var i = 0; i != data.length; i++)
    {
        binary_tree.insert_to_tree_for_test(data[i]);
    }
    return binary_tree;
}


BinaryTree.prototype.insert_to_tree_for_test = function(data)
{
    this.root = this._insert_to_tree_node_for_test(this.root,data);
    return this.root;
}


BinaryTree.prototype._insert_to_tree_node_for_test = function(binary_tree_node,data)
{
    if (binary_tree_node == null)
    {
        return new BinaryTreeNode(data, null, null);
    }
    else if (binary_tree_node.data < data)
    {
        binary_tree_node.right = this._insert_to_tree_node_for_test(binary_tree_node.right, data);

    }
    else if (binary_tree_node.data > data)
    {
        binary_tree_node.left = this._insert_to_tree_node_for_test(binary_tree_node.left, data);
    }
    return binary_tree_node;
}


