    HashTable.create_hash_table = function(hash_size)
    {
        var hash_table = new HashTable();
        hash_table.table = new Array(hash_size);
        for(var i = 0 ;i != hash_size; i++)
        {
            hash_table.table[i] = new Array();
        }
        return hash_table;
    };
