
# def get_max(lst, start=0, end=None):
#     if end is None:
#         end = len(lst)
#     if end - start == 1:
#         return lst[start]
#     max_rest = get_max(lst, start + 1, end)
#     return lst[start] if lst[start] > max_rest else max_rest


# print(get_max([1, 4, 2, 3]))