    ArraySort.prototype.select_sort = function(){
        for(var i = 0; i < this.desc_sort.length; i++)
        {
            var k = i;
            for(var j = i+1; j != this.desc_sort.length; j++){
                if(this.desc_sort[j] < this.desc_sort[k]) k = j;
            }
            if (k != i){
                this._swap_data(this.desc_sort,k,i);
            }
        }
        return this;
    };
    ArraySort.prototype._swap_data = function (swap_data,i,j) {
        var temp = swap_data[i];
        swap_data[i] = swap_data[j];
        swap_data[j] = temp;
    };