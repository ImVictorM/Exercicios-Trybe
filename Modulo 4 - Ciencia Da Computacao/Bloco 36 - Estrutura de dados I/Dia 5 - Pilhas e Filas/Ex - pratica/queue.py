from linked_list import LinkedList


class Queue:
    def __init__(self) -> None:
        self.data = LinkedList()

    def __str__(self) -> str:
        display = ""

        for i in range(len(self.data)):
            display += str(self.data.get_element_at(i).value)

            if i < len(self.data) - 1:
                display += " <- "

        return display

    def __len__(self):
        return len(self.data)

    def enqueue(self, value):
        self.data.insert_last(value)

    def dequeue(self):
        removed = self.data.remove_first()
        return removed

    def peek(self):
        return self.data.get_element_at(0)

    def is_empty(self):
        return not len(self.data)


q = Queue()
q.enqueue(1)
q.enqueue(4)
q.enqueue(6)
q.enqueue(1)
q.enqueue(7)
print(q)
