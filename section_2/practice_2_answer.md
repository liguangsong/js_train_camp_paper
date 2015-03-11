    LinkedList.create_list_from_array = function(array_data)
    {
        var list = new LinkedList();
        for(var i = 0; i != array_data.length; i++)
        {
            list.insert_node_to_list_last(array_data[i]);
        }
        return list;
    };

    LinkedList.prototype.insert_node_to_list_last = function(data)
    {

        if (!this.list_header) {
            this.list_header = new ListNode(data);
        }
        else
        {
            var last_node = this.get_last_node();
            var new_node = new ListNode(data);
            last_node.next = new_node;
        }

        return this.list_header;
    };

    LinkedList.prototype.get_last_node = function()
    {
        var last_node = this.list_header;
        while (last_node.next != null)
        {
            last_node = last_node.next;
        }
        return last_node;
    };
    