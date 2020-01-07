import eel, random
from tkinter import *


eel.init('web')

master = Tk()

w = Canvas(master, width=40, height=60)
w.pack()

canvas_height=20
canvas_width=200

y= int(canvas_height / 2)
w.create_line(0,y,canvas_width,y)
mainloop()


# m =tk.Tk()
# m.title('Sort')
# button = tk.Button(m, text='Test', width=25, command=m.destroy)
# button.pack()
# m.mainloop()



# @eel.expose
# def setup:
