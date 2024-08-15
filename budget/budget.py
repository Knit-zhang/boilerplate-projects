class Category:
    def __init__(self, category):
        self.category = category
        self.ledger = []
        self.__balance = 0.0

    def __repr__(self):
        header = self.category.center(30, '*') + '\n'
        ledger = ""
        for item in self.ledger:
            desc = f"{item['description']:<23}"
            amt = f"{item['amount']:>7.2f}"
            ledger += f"{desc[:23]}{amt[:7]}\n"
        total = f"Total: {self.get_balance():.2f}"
        return header + ledger + total

    def add_record(self, amount, description):
        self.__balance += amount
        self.ledger.append({"amount": amount, "description": description})

    def deposit(self, amount, description=""):
        self.add_record(amount, description)
    
    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.add_record(-1 * amount, description)
            return True
        else: return False
    
    def get_balance(self):
        print(self.__balance)
        return self.__balance
    
    def transfer(self, amount, category_instance):
        if self.check_funds(amount):
            self.add_record(-1 * amount, f"Transfer to {category_instance.category}")
            # need to call `Category`.deposit(amount) on the category instance here
            category_instance.deposit(amount, f"Transfer from {self.category}")
            return True
        else: return False
    
    def check_funds(self, amount):
        if amount > self.__balance: return False
        else: return True

def create_spend_chart(categories):
    spent_amounts = []
    for category in categories:
        spent = 0
        for item in category.ledger:
            if item["amount"] < 0:
                spent += abs(item["amount"])
        spent_amounts.append(round(spent, 2))
    
    # calculate percentage
    total = round(sum(spent_amounts), 2)
    spent_percentage = list(map(lambda amount: (amount / total) * 100 // 1, spent_amounts))

    header = "Percentage spent by category\n"

    chart = ""
    for value in reversed(range(0, 101, 10)):
        chart += str(value).rjust(3) + '|'
        for percent in spent_percentage:
            if percent >= value:
                chart += " o "
            else:
                chart += "   "
        chart += " \n"
    
    footer = "    " + "-" * ((3 * len(categories)) + 1) + '\n'
    descriptions = list(map(lambda category: category.category, categories))
    max_length = max(map(lambda description: len(description), descriptions))
    descriptions = list(map(lambda description: description.ljust(max_length), descriptions))
    for x in zip(*descriptions):
        footer += "    " + "".join(map(lambda s: s.center(3), x)) + " \n"

    return (header + chart + footer).rstrip("\n")    

food = Category('food')
clothes = Category('clothes')
food.deposit(1000)
food.transfer(500, clothes)
clothes.get_balance()
food.get_balance()
print(food)
print(create_spend_chart([food, clothes]))