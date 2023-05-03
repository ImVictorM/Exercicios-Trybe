def get_triangle(side1, side2, side3):
    is_triangle = (
        (side1 + side2) > side3
        and (side3 + side1) > side2
        and (side3 + side2) > side1
    )
    if is_triangle:
        if side1 == side2 == side3:
            print("Equilateral triangle")
        elif side1 == side2 or side2 == side3 or side1 == side3:
            print("Isosceles Triangle")
        else:
            print("Scalene triangle")
    else:
        print("It can't make a triangle")


get_triangle(170, 150, 250)
