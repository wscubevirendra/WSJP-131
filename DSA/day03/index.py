
def binary_search(array, target):
    left = 0
    right = len(array) - 1

    while left <= right:
        midd = (left + right) // 2  #0+3=3/2=1
        if array[midd] == target:
            #30==20
            return midd
        elif array[midd] < target:
            #30<20
            left = midd + 1
        else:
            right = midd - 1

    return -1


print(binary_search([10, 20, 30, 40, 50], 20))
