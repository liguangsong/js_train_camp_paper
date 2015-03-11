    HashTable.prototype.find_str_from_hash = function(str)
    {
        var index = this._string_to_num(str) % this.table.length;
        return {row:index, column:this._find_data_from_hash_index(index,str)};
    };

    HashTable.prototype._string_to_num = function(str)
    {
        var total = 0;
        for (var i = 0; i < str.length; ++i) {
            total += str.charCodeAt(i);
        }

        return total;
    };
    HashTable.prototype._find_data_from_hash_index = function(index, str)
    {
        return this.table[index].indexOf(str);
    };