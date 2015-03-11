    ArraySort.prototype.shell_sort = function()
    {
        var gap = 1;
        while (gap < this.desc_sort.length/3) {
            gap = 3 * gap + 1;
        }
        while (gap >= 1) {
            this._sort_gap_length(this.desc_sort,gap);
            gap = (gap-1)/3;
        }
        return this;
    };

    ArraySort.prototype._sort_gap_length = function(sort_data,gap)
    {
        for (var i = gap; i < this.desc_sort.length; i++) {
            for (var j = i; j >= gap && this.desc_sort[j] < this.desc_sort[j-gap];
                 j -= gap) {
                this._swap_data(sort_data, j, j-gap);
            }
        }
    };
    ArraySort.prototype._swap_data = function (swap_data,i,j) {
        var temp = swap_data[i];
        swap_data[i] = swap_data[j];
        swap_data[j] = temp;
    };