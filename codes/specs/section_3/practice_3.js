
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

    /////////////查看一个数据是否在一个数组中///////////////////////
    it("the data is in binary tree", function () {
        var binary_tree = BinaryTree.create_tree_from_array_for_test(tree_data);
        console.log("create binary tree from a array , the array is 23,45,16,37,3,99,22");
        console.log("true function exec ,find tree data is 22");
        var tree_node = binary_tree.is_data_in_tree(22);
        console.log("your function exec ,find tree data is "+tree_node.data);
        expect(tree_node.data).toBe(22);
    });

    it("the data is not in binary tree", function () {
        var binary_tree = BinaryTree.create_tree_from_array_for_test(tree_data);
        console.log("true function exec ,find tree data is null");
        var tree_node = binary_tree.is_data_in_tree(100);
        console.log("true function exec ,find tree data is "+tree_node);
        expect(tree_node).toBe(null);
    });


});




