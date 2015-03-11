
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

    it("remove node data from list, node data is 1", function () {
        console.log("Create linked list is "+test_data);
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,linked list is 5,6,2,23,12,52,12,11,10");

        var remove_node = link_list.remove_node_from_list(1);
        console.log("Your function exec,removed node is " + remove_node.data);
        expect(remove_node.data).toBe(1);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);

        expect(same_between_array(remove_list,[5,6,2,23,12,52,12,11,10])).toBe(true);
    });

    it("remove node data from list, node data is 2", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,linked list is 1,5,6,23,12,52,12,11,10");

        var remove_node = link_list.remove_node_from_list(2);
        console.log("Your function exec,removed node is " + remove_node.data);
        expect(remove_node.data).toBe(2);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);

        expect(same_between_array(remove_list,[1,5,6,23,12,52,12,11,10])).toBe(true);
    });

    it("remove node data from list, node data is 10", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,linked list is 1,5,6,2,23,12,52,12,11");

        var remove_node = link_list.remove_node_from_list(10);
        console.log("Your function exec,removed node is " + remove_node.data);
        expect(remove_node.data).toBe(10);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);

        expect(same_between_array(remove_list,[1,5,6,2,23,12,52,12,11])).toBe(true);
    });

    it("remove node data from list, node data don't have", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        //console.log(desc_data);
        console.log("Right function exec,linked list is 1,5,6,2,23,12,52,12,11,10");
        console.log("Right function exec,removed node is null");

        var remove_node = link_list.remove_node_from_list(100);
        console.log("Your function exec,removed node is " + remove_node);
        expect(remove_node).toEqual(null);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);

        expect(same_between_array(remove_list,[1,5,6,2,23,12,52,12,11,10])).toBe(true);
    });

    it("remove node data from list, node index is 0", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        //console.log(desc_data);
        console.log("Right function exec,linked list is 5,6,2,23,12,52,12,11,10");
        console.log("Right function exec,removed data is 1");

        var remove_node = link_list.remove_node_index_from_list(0);
        console.log("Your function exec,removed data is "+remove_node.data);
        expect(remove_node.data).toBe(1);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);
        expect(same_between_array(remove_list,[5,6,2,23,12,52,12,11,10])).toBe(true);
    });

    it("remove node data from list, node index is 3", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,linked list is 1,5,6,23,12,52,12,11,10");
        console.log("Right function exec,removed data is 2");

        var remove_node = link_list.remove_node_index_from_list(3);
        console.log("Your function exec,removed data is "+remove_node.data);
        expect(remove_node.data).toBe(2);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);
        expect(same_between_array(remove_list,[1,5,6,23,12,52,12,11,10])).toBe(true);
    });

    it("remove node data from list, node index is 9", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,linked list is 1,5,6,2,23,12,52,12,11");
        console.log("Right function exec,removed data is 9");

        var remove_node = link_list.remove_node_index_from_list(9);
        console.log("Your function exec,removed data is "+remove_node.data);
        expect(remove_node.data).toBe(10);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);
        expect(same_between_array(remove_list,[1,5,6,2,23,12,52,12,11])).toBe(true);
    });

    it("remove node data from list, node index don't have", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        console.log("Right function exec,linked list is 1,5,6,2,23,12,52,12,11,10");
        console.log("Right function exec,removed data is null");

        var remove_node = link_list.remove_node_index_from_list(10);
        console.log("Your function exec,removed data is "+remove_node);
        expect(remove_node).toEqual(null);

        var remove_list = list_to_array(link_list.list_header)
        console.log("Your function exec,linked list is "+remove_list);
        expect(same_between_array(remove_list,[1,5,6,2,23,12,52,12,11,10])).toBe(true);
    });
});




