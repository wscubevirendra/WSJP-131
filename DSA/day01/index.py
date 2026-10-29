class Stack:
    def __init__(self):
        self.items=[]

    def insert(self,item):
        self.items.append(item)

    def length(self):
        print(len(self.items))    

    def remove(self):
        if len(self.items)==0:
            print("Stack is empty")
        else:
            self.items.pop()
    def peak(self):
        if len(self.items)==0:
            print("Stack is empty")
        else:
            print(self.items[-1])

    def display(self):
        if len(self.items)==0:
            print("Stack is empty")
        else:
            print(self.items)

s=Stack()
m=Stack()
s.insert(10)
s.insert(20)
s.insert(30)
s.insert(40)
s.insert(50)
s.insert(60)
s.remove()
s.remove()
s.remove()
s.peak()
s.length()
s.display()

                        


