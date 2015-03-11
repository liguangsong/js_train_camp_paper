    BinaryTree.prototype.is_data_in_tree = function(data)
    {
        for(var current_node = this.root; current_node != null;) {
            if (current_node.data == data) return current_node;
            else if (data < current_node.data)  current_node = current_node.left;
            else current_node = current_node.right;
        }
        return null;
    };
