function ListNode(data)
{
    this.data = data;
    this.next = null;
    return this;
}

function LinkedList()
{
    this.list_header = null;
}

LinkedList.prototype.insert_node_to_list_first = function(data)
{
    //在这里写入代码
    return this.list_header;
};