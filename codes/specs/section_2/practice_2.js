
describe('practice-2-2', function () {

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

    ///////////////////根据数组创建一个链表///////////////////////////
    it("link list is created from array", function () {
        console.log("The array create linked list, the array is :" + test_data);
        var link_list = LinkedList.create_list_from_array(test_data);
        var desc_data = list_to_array(link_list.list_header);
        console.log("your function create linked list is :" + desc_data);
        expect(same_between_array(test_data, desc_data)).toBe(true);
    });


});




