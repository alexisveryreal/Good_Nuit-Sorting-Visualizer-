import time 
import copy
import random

size1 = 100
span = 1000000


#---Random---#
#-------------
# size = 100
#---------------
print("\nRandom Order\n-----")
ran = [random.randint(0,span) for a in range(0, size1)]
t1 = time.clock()
#bubble sort here
print("Bubble Sort(size=", str(size1), "): ", (time.clock()-t1) * 1000)