class Queue:
    def __init__(self):
        self.items=[]

    def insert(self,item):
        self.items.append(item)


    def display(self):
        if len(self.items)==0:
            print("Queue is Empty")
        else:
            print(self.items)

    def remove(self):
        if len(self.items)==0:
            print("Queue is empty")
        else:
            self.items.pop(0)                    

    

def red():
    print("Red")

def green():
    print("Green")
    red()

def yellow():
    green()
    print("Yellow")    


yellow()                        


