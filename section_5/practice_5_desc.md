本课学习快速排序，快速排序使用分治法策略来把一个串行分为两个子串行，工作原理如下：

1.从数列中挑出一个元素，称为 "基准"，

2.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。

3.递归地把小于基准值元素的子数列和大于基准值元素的子数列排序。

在quick\_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，按照升序（从小到大）排序。