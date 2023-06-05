from linked_list import LinkedList


class Stack:
    def __init__(self) -> None:
        self.data = LinkedList()

    def __len__(self):
        return len(self.data)

    def __str__(self) -> str:
        display = ""

        for i in range(len(self.data)):
            display += str(self.data.get_element_at(i).value)

            if i < len(self.data) - 1:
                display += " -> "

        return display

    def push(self, value):
        self.data.insert_last(value)

    def pop(self):
        removed = self.data.remove_last()
        return removed

    def peek(self):
        last_position = len(self) - 1
        return self.data.get_element_at(last_position).value

    def is_empty(self):
        return not len(self)


s = Stack()
print(s.is_empty())
s.push(1)
s.push(5)
s.push(6)
s.push(3)
s.pop()
print(s)
print(s.peek())
print(s.is_empty())
