    ArraySort.prototype.quick_sort = function()
    {
        this.desc_sort = this._quick_sort(this.desc_sort);
        return this;
    };

    ArraySort.prototype._quick_sort = function(sort_data)
    {
        if (sort_data.length == 0) return [];
        var left_data = [], right_data = [];
        var start_data = sort_data[0];

        for (var i = 1; i < sort_data.length; i++) {
            if (sort_data[i] < start_data) {
                left_data.push(sort_data[i]);
            }
            else {
                right_data.push(sort_data[i]);
            }
        }
        return this._quick_sort(left_data).concat(start_data,this._quick_sort(right_data));
    };