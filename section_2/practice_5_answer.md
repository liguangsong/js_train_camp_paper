    LinkedList.prototype.remove_node_from_list = function(data)
    {
        var temp = this._find_node_data_from_list(data);
        if (temp == null) return null;
        if (temp.last != null)
            temp.last.next = temp.current.next;
        else
            this.list_header = temp.current.next;

        return temp.current;
    };

    LinkedList.prototype.remove_node_index_from_list = function(index)
    {
        var temp = this._get_node_index_from_list(index);
        if (temp == null) return null;
        if (temp.last != null)
            temp.last.next = temp.current.next;
        else
            this.list_header = temp.current.next;
        return temp.current;
    };

    LinkedList.prototype._find_node_data_from_list = function(data)
    {
        var last_node = null;
        var current_node = this.list_header;
        while(current_node.data != data)
        {
            last_node = current_node;
            current_node = current_node.next;
            if (current_node == null) return null;
        }

        return {
            last:last_node,
            current:current_node
        };
    };
    LinkedList.prototype._get_node_index_from_list = function(index)
    {
        var first_node = null;
        var second_node = this.list_header;
        for (var i = 0 ; i != index; i++)
        {
            first_node = second_node;
            second_node = second_node.next;
            if (second_node == null) return null;
        }

        return {
            last:first_node,
            current:second_node
        };
    };
