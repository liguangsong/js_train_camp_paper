    LinkedList.prototype.insert_node_to_list_index = function(index, data)
    {
        if(index == 0) return this.insert_node_to_list_first(data);

        var temp = this._get_node_index_from_list(index);
        this._insert_between_nodes(temp.last, temp.current, data);

        return this.list_header;
    };

    LinkedList.prototype.insert_node_to_list_first = function(data)
    {
        var new_node = new ListNode(data);
        new_node.next = this.list_header;
        this.list_header = new_node;
        return this.list_header;
    };

    LinkedList.prototype._get_node_index_from_list = function(index)
    {
        var first_node = null;
        var second_node = this.list_header;
        for (var i = 0 ; i != index; i++)
        {
            first_node = second_node;
            second_node = second_node.next;
        }

        return {
            last:first_node,
            current:second_node
        };
    };

    LinkedList.prototype._insert_between_nodes = function(first_node, second_node, data)
    {
        var new_node = new ListNode(data);
        new_node.next = second_node;
        if (first_node != null) first_node.next = new_node;
        return new_node;
    };
