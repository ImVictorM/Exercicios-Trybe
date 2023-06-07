from stack import Stack


class StackLimit(Stack):
    def __init__(self, stack_len) -> None:
        super().__init__()
        self._max_len = stack_len

    def push(self, value):
        if len(self) >= self._max_len:
            raise OverflowError

        return super().push(value)


s = StackLimit(4)
s.push(1)
s.push(1)
s.push(1)
s.push(1)
s.push(1)  # overflow
print(s)
