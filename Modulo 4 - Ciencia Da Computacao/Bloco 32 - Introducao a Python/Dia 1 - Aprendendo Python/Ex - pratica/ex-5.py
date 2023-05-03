def get_tint_quantity_per_square_meter(wall_size):
    paint_cost = 80
    paint_liter = 18

    liters_required = wall_size / 3
    paint_quantity_to_buy = liters_required // paint_liter
    return (paint_quantity_to_buy, paint_quantity_to_buy * paint_cost)


print(get_tint_quantity_per_square_meter(220))
