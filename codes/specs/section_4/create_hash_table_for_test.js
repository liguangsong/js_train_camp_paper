

HashTable.create_hash_table_for_test = function(hash_size)
{
    var hash_table = new HashTable();
    hash_table.table = new Array(hash_size);
    for(var i = 0 ;i != hash_size; i++)
    {
        hash_table.table[i] = new Array();
    }
    return hash_table;
}
HashTable.prototype.insert_str_from_hash_for_test = function(str)
{
    var index = this._string_to_num_for_test(str) % this.table.length;
    return this._put_data_to_hash_for_test(index,str);
}
HashTable.prototype._put_data_to_hash_for_test = function(index, str)
{
    if (this.table[index].indexOf(str) < 0)
    {
        this.table[index].push(str);
    }
    return index;
}
HashTable.prototype._string_to_num_for_test = function(str)
{
    var total = 0;
    for (var i = 0; i < str.length; ++i) {
        total += str.charCodeAt(i);
    }

    return total;
}
