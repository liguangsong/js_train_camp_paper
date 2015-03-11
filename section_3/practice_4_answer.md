    BinaryTree.prototype.remove_data_in_tree = function(data)
    {
        var temp_node_info = this._remove_data_under_tree_node(this.root, data);
        if(temp_node_info.remove_main_node) this.root = temp_node_info.current;
    };

    BinaryTree.prototype._remove_data_under_tree_node = function(tree_node,data)
    {
        var desc_node = this._find_data_under_tree_node(tree_node,data);
        if (desc_node == null) return null;
        if ( desc_node.current.right == null || desc_node.current.left == null)
        {
            return this._remove_node_half_baked_tree(desc_node.last, desc_node.current);
        }
        else{
            var left_max_node = this._get_max_data_under_tree_node(tree_node.left);
            desc_node.current.data = left_max_node.current.data;
            return this._remove_node_half_baked_tree(left_max_node.last, left_max_node.current);
        }
    };

    BinaryTree.prototype._find_data_under_tree_node = function(tree_node,data)
    {

        for(var current_node = tree_node, last_node = null; current_node != null;) {
            if (current_node.data == data) return {last:last_node,current:current_node};
            last_node = current_node;
            if (data < current_node.data) current_node = current_node.left;
            else current_node = current_node.right;
        }
        return null;
    };

    BinaryTree.prototype._remove_node_half_baked_tree = function(last_node, current_node)
    {
        var temp_node = current_node.left != null ? current_node.left : current_node.right;
        if (last_node == null) return {remove_main_node:true, current:temp_node};
        else if (last_node.right.data == current_node.data) last_node.right = temp_node;
        else if (last_node.left.data == current_node.data) last_node.left = temp_node;
        return {remove_main_node:false, current : temp_node};

    };

    BinaryTree.prototype._get_max_data_under_tree_node = function(tree_node)
    {
        var max_data_node = tree_node;
        var max_data_last_node = null
        while(max_data_node.right != null)
        {
            max_data_last_node = max_data_node;
            max_data_node = max_data_node.right;
        }
        return {last:max_data_last_node, current:max_data_node};
    };
