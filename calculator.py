print("Welcome to the tip calculator.")
bill_total = float(input("What was the total bill? $"))
tip = float(input("What percentage tip would you like to give? 10, 12 or 15?"))
split = float(input("How many people split the bill?"))
total_with_tip = (bill_total * (tip / 100)) + bill_total
amount_payable = round(total_with_tip / split, 2)
print(f"Each person should pay ${amount_payable}")
print("It was at this point I realized why people like python so much :)")