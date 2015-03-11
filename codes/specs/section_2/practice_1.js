
describe('practice-2-1', function () {

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




    /////////////////测试插入节点//////////////////////////////////
    it("list node insert to link list first", function () {
        console.log("create list");
        var link_list = LinkedList.create_list_from_array_for_test(test_data);
        var insert_num = Math.floor(Math.random()*10)
        console.log("Insert the data (" + insert_num +") to the array ("+test_data+") in the begin");
        var desc_data = test_data.concat();
        desc_data.unshift(insert_num);
        console.log("true function exec, the linked is "+desc_data);
        //console.log(desc_data);
        link_list.insert_node_to_list_first(insert_num);
        var your_data = list_to_array(link_list.list_header);
        console.log("your function exec, the linked is "+your_data);

        expect(same_between_array( desc_data,your_data)).toBe(true);
    });




});




