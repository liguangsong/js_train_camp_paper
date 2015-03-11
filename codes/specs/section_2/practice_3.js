
describe('practice-2-3', function () {

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

    it("list node insert to link list index, index is first", function () {
        console.log("The lined list is "+test_data);
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        var insert_num = Math.floor(Math.random()*10);
        console.log("Insert data " + insert_num + "to the linked list index first");

        var desc_data = test_data.concat();
        desc_data.unshift(insert_num);
        console.log("true function exec , the linked list is "+ desc_data);

        link_list.insert_node_to_list_index(0,insert_num);
        var linked_list = list_to_array(link_list.list_header);
        console.log("your function exec , the linked list is "+ linked_list);

        expect(same_between_array(desc_data, linked_list)).toBe(true);
    });

    it("list node insert to link list index, index is last", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        var insert_num = Math.floor(Math.random()*10);
        console.log("Insert data " + insert_num + "to the linked list index last");

        var desc_data = test_data.concat();
        desc_data.push(insert_num);
        console.log("true function exec , the linked list is "+ desc_data);

        link_list.insert_node_to_list_index(10,insert_num);
        var link_list_data = list_to_array(link_list.list_header)
        console.log("your function exec , the linked list is "+ link_list_data);

        expect(same_between_array(desc_data, link_list_data)).toBe(true);
    });

    it("list node insert to link list index, index is in the middle", function () {
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        var insert_num = Math.floor(Math.random()*10)
        console.log("Insert data " + insert_num + "to the linked list index 3");

        var desc_data = test_data.concat();
        desc_data.splice(3,0,insert_num);
        console.log("true function exec , the linked list is "+ desc_data);//console.log(desc_data);

        link_list.insert_node_to_list_index(3,insert_num);
        var linked_list = list_to_array(link_list.list_header);
        console.log("your function exec , the linked list is "+ linked_list);

        expect(same_between_array(desc_data, linked_list)).toBe(true);
    });



});




