    ArraySort.prototype.bubble_sort = function ()
    {
        for(var i = 0 ; i<this.desc_sort.length; i++){
            for(var j = this.desc_sort.length - 1; i != j; j--){
                if(this.desc_sort[j] < this.desc_sort[j-1]){
                    this._swap_data(this.desc_sort,j,j-1);
                }
            }
        }
        return this;
    };

    ArraySort.prototype._swap_data = function (swap_data,i,j) {
        var temp = swap_data[i];
        swap_data[i] = swap_data[j];
        swap_data[j] = temp;
    };