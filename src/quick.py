#--------------------------
# Quicksort   oui oui
#--------------------------
import sys

def swap(keep, a, b):
    keep[a], keep[b]= keep[b], keep[a]

def partition(keep, low, high):
    pivot=keep[high]
    i=low
    for j in range (low, high):
        if keep[j]<= pivot:
            swap(keep, i, j)
            i += 1
    swap(keep, i, high)
    return i

def quicksort(keep, low, high):
    if low < high:
        p=partition(keep, low, high)
        quicksort(keep, low, p-1)
        quicksort(keep, p+1, high)

# Array= [0,5,9,1,2,4,8,6,3,7]
# print(Array)
# quicksort(Array, 0, 9)
# print(Array)

