
describe('practice-2-4', function () {

    var test_data = [1,5,6,2,23,12,52,12,11,10];

    function list_to_array(header_node)
    {
        var current_node = header_node;
        console.log("begin list to array");
        //console.log(header_node == null);
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

    it("find node data from list, index return 0", function () {
        console.log("Create linked list is "+test_data);
        var link_list = LinkedList.create_list_from_array_for_test(test_data);

        console.log("Right function exec,find linked list index is 0");

        var find_index = link_list.get_node_index_from_data(1)
        console.log("Your function exec,find linked list index is "+find_index);
        expect(find_index).toBe(0);
    });

    it("find node data from list, index return 6", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,find linked list index is 2");

        var find_index = link_list.get_node_index_from_data(6)
        console.log("Your function exec,find linked list index is "+find_index);

        expect(find_index).toBe(2);
    });

    it("find node data from list, index return 9", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,find linked list index is 9");

        var find_index = link_list.get_node_index_from_data(10)
        console.log("Your function exec,find linked list index is "+find_index);
        expect(find_index).toBe(9);
    });

    it("find node data from list, index return -1", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,find linked list index is -1");

        var find_index = link_list.get_node_index_from_data(100);
        console.log("Your function exec,find linked list index is "+find_index);
        expect(find_index).toBe(-1);
    });
});




