# definition
my_list = [1,2,3]
my_list = ['STRIMNG',100,23.2]
len(my_list)
my_list = ['one','two','three']

# indexing
my_list[0]
my_list[1:]
my_list[1:3]

# concatenation
another_list = ['four','five']
my_list + another_list
new_list = my_list + another_list

# addiing
new_list[0] = 'ONE ALL CAPS'
new_list.append('six')
new_list.append('seven')

# removing
new_list.pop()
popped_item = new_list.pop()
popped_item = new_list.pop(0)
popped_item = new_list.pop(-1)

new_list_2 = ['a','e','x','b','c']
new_list_2.sort()
num_list = [4,3,7,1,9]
num_list.sort()

num_list.reverse()