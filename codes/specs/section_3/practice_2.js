
describe('practice-3-1', function () {

    var tree_data = [23,45,16,37,3,99,22];
    var tree_data_v3 = [27,16,45,3,22,37,99,15,2,20,25,36,40,70,120];

    function list_to_array(header_node)
    {
        var current_node = header_node;
        var data = [];
        while(current_node != null)
        {
            data.push(current_node.data);
            current_node = current_node.next;
        }
        return data;
    }


    function same_between_array(src_data, desc_data)
    {
        if (src_data.length != desc_data.length) return false;

        for(var i = 0; i != src_data.length; i++)
        {
            if (src_data[i] != desc_data[i])
            {
                return false;
            }
        }
        return true;
    }

    function same_between_object_array (src_data, desc_data)
    {
        if (src_data.length != desc_data.length) return false;

        for(var i = 0; i != src_data.length; i++)
        {
            if (src_data[i].pos != desc_data[i].pos
                || src_data[i].value != desc_data[i].value)
            {
                return false;
            }
        }
        return true;
    }

    function inoder_traversal_tree(tree_node,tree_array_data)
    {
//        console.log(tree_node);
        if (tree_node != null)
        {
            inoder_traversal_tree(tree_node.left,tree_array_data);
            tree_array_data.push(tree_node.data);
            inoder_traversal_tree(tree_node.right,tree_array_data);
        }
    }

    function is_binary_tree(tree_node)
    {
        var tree_node_array = [tree_node];
        while (tree_node_array.length != 0)
        {
            var current_node = tree_node_array.pop();
            if (current_node.left != null)
            {
                if (current_node.left.data > current_node.data) return false;
                tree_node_array.push(current_node.left);
            }
            if (current_node.right != null)
            {
                if (current_node.right.data < current_node.data) return false;
                tree_node_array.push(current_node.right);
            }
        }
        return true;
    }


    ///////////////////根据数组创建一个树///////////////////////////
    it("binary tree is created from array", function () {
        console.log("true function create binary tree, inoder traversal tree is 3,16,22,23,37,45,99")
        var mid_node_data = [];
        var binary_tree = BinaryTree.create_tree_from_array(tree_data);
        inoder_traversal_tree(binary_tree.root,mid_node_data);
        console.log("your function create binary tree, inoder traversal tree is "+mid_node_data);
        expect(same_between_array(mid_node_data, [3,16,22,23,37,45,99])).toBe(true);
    });

});




