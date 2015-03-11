    ArraySort.prototype.insert_sort = function()
    {
        for(var i = 1,temp,j; i < this.desc_sort.length; i++){
            temp = this.desc_sort[i];
            j = i - 1;
            while( j >= 0 && temp < this.desc_sort[j]){
                this.desc_sort[j+1] = this.desc_sort[j];
                j--;
            }
            this.desc_sort[j+1] = temp;
        }
        return this;
    };
