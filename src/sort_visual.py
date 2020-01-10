import eel
import sys


@eel.expose
def bubble_sort(A, loops):
    for i in range (0, len(A) - 1):
        done = True
        for j in range (0, len(A) - i - 1):
            if A[j] > A[j+1]:
                A[j], A[j+1] = A[j+1], A[j]
                done = False
        if done:
            return
        else:
            loops += 1
        
if __name__=="__main__":
    eel.init('web')
    eel.start('index.html') 
