    BinaryTree.prototype.insert_data_to_tree = function(data)
    {
        this.root = this._insert_data_to_tree(this.root,data);
        return this.root;
    };


    BinaryTree.prototype._insert_data_to_tree = function(binary_tree_node,data)
    {
        if (binary_tree_node == null)
        {
            return new BinaryTreeNode(data, null, null);
        }
        else if (binary_tree_node.data < data)
        {
            binary_tree_node.right = this._insert_data_to_tree(binary_tree_node.right, data);

        }
        else if (binary_tree_node.data > data)
        {
            binary_tree_node.left = this._insert_data_to_tree(binary_tree_node.left, data);
        }
        return binary_tree_node;
    };
    