    HashTable.prototype.insert_str_from_hash = function(str)
    {
        var index = this._string_to_num(str) % this.table.length;
        return this._put_data_to_hash(index,str);
    };
    HashTable.prototype._put_data_to_hash = function(index, str)
    {
        if (this.table[index].indexOf(str) < 0)
        {
            this.table[index].push(str);
        }
        return index;
    };
    HashTable.prototype._string_to_num = function(str)
    {
        var total = 0;
        for (var i = 0; i < str.length; ++i) {
            total += str.charCodeAt(i);
        }

        return total;
    };