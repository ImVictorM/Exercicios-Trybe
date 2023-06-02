from node import Node
from typing import Optional


class LinkedList:
    def __init__(self):
        self.head: Optional[Node] = None
        self.__length = 0

    def __str__(self):
        return f"len={self.__length}\n {self.head})"

    def __len__(self):
        return self.__length

    def get_node_at(self, target_position):
        if target_position <= 0:
            return self.head

        pointer = self.head
        current_position = 0
        max_position = len(self) - 1

        while (
            current_position != target_position
            and current_position < max_position
        ):
            pointer = pointer.next
            current_position += 1

        return pointer

    def insert_first(self, value):
        new_first_node = Node(value)
        new_first_node.next = self.head
        self.head = new_first_node
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_tail = Node(value)

        current_tail_position = len(self) - 1
        former_tail = self.get_node_at(current_tail_position)

        former_tail.next = new_tail
        self.__length += 1

    def insert_at(self, value, position_to_insert):
        if position_to_insert < 1:
            return self.insert_first(value)
        if position_to_insert >= len(self):
            return self.insert_last(value)

        node_before_to_insert = self.get_node_at(position_to_insert - 1)

        new_node = Node(value)
        new_node.next = node_before_to_insert.next
        node_before_to_insert.next = new_node
        self.__length += 1

    def remove_first(self):
        node_to_be_removed = self.head
        if node_to_be_removed is not None:
            self.head = node_to_be_removed.next
            node_to_be_removed.next = None
            self.__length -= 1
        return node_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        last_but_one_position = len(self) - 2
        last_but_one = self.get_node_at(last_but_one_position)

        value_to_be_removed = last_but_one.next
        last_but_one.next = None

        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position_to_remove):
        if position_to_remove < 1:
            return self.remove_first()
        if position_to_remove >= len(self):
            return self.remove_last()

        before_removal_position = self.get_node_at(position_to_remove - 1)

        value_to_be_removed = before_removal_position.next
        before_removal_position.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def is_empty(self):
        return not self.__length

    def clear(self):
        while not self.is_empty():
            self.remove_first()
        return self.__length


ll = LinkedList()
ll.insert_first(1)
ll.insert_last(3)
ll.insert_at(2, 1)
ll.remove_last()
ll.remove_at(1)
print(ll)
