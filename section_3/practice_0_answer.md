    BinaryTree.prototype.preorder_traversal_tree = function()
    {
        var tree_array_data = [];
        this._preorder_traversal_tree_node(this.root,tree_array_data);
        return tree_array_data;
    };

    BinaryTree.prototype.postorder_traversal_tree = function()
    {
        var tree_array_data = [];
        this._postorder_traversal_tree_node(this.root,tree_array_data);
        return tree_array_data;
    };

    BinaryTree.prototype._preorder_traversal_tree_node = function(tree_node,tree_array_data)
    {
        if (tree_node != null)
        {
            tree_array_data.push(tree_node.data);
            this._preorder_traversal_tree_node(tree_node.left,tree_array_data);
            this._preorder_traversal_tree_node(tree_node.right,tree_array_data);
        }
    };

    BinaryTree.prototype._postorder_traversal_tree_node = function(tree_node, tree_array_data)
    {

        if (tree_node != null)
        {
            this._postorder_traversal_tree_node(tree_node.left,tree_array_data);
            this._postorder_traversal_tree_node(tree_node.right,tree_array_data);
            tree_array_data.push(tree_node.data);
        }
    };
    