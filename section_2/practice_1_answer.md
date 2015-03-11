    LinkedList.prototype.insert_node_to_list_first = function(data)
    {
        var new_node = new ListNode(data);
        new_node.next = this.list_header;
        this.list_header = new_node;
        return this.list_header;
    };
    