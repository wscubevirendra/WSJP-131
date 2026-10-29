def twoSum(array,target):
    left=0
    right=len(array)-1
    while left<right:
        current=array[left]+array[right]
        if current==target:
            return [left,right]
        elif current<target:
            left+=1
        elif current>target:
            right-=1
        else:
            return "None of this number"        


def reverse(array):
    left=0;
    right=len(array)-1

    while left<right:
        array[left],array[right]=array[right],array[left]
        left+=1
        right-=1
    return array

 