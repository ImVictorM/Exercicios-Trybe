def to_pay(liters, type):
    fuel = {
        "G": {"price": 2.50, "discount": 0.04 if liters <= 20 else 0.06},
        "A": {"price": 1.90, "discount": 0.03 if liters <= 20 else 0.05},
    }

    client_fuel_type = fuel[type]
    full_price = liters * client_fuel_type["price"]
    total_discount = full_price * client_fuel_type["discount"]

    return full_price - total_discount


print(to_pay(10, "G"))
print(to_pay(30, "A"))
