#-----------------------
# insertion Sort wooooo
#------------------------


#shifts, no swaps
def insertion_sort(A):
    for i in range(1, len(A)):
        curNumber = A[i]
        k = 0
        for j in range(i-1, -2, -1):
            k = j
            if A[j] > curNumber:
                A[j+1] = A[j]
            else:
                break
        A[k+1] = curNumber

# A = [5,9,1,2,4,8,6,3,7]
# print(A)
# insertion_sort(A)
# print(A)