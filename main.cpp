#include <iostream>
#include <iomanip>
using namespace std;


int main(){
    float bill_total, tip, split;
    bill_total = tip = split = 0;

    cout << "Welcome to the tip calculator." << endl;
    cout << "What was the total bill? $" << endl;
    cin >> bill_total;
    cout << "What percentage tip would you like to give? 10, 12 or 15?" << endl;
    cin >> tip;
    cout << "How many people split the bill?" << endl;
    cin >> split;

    float total_with_tip = (bill_total * (tip / 100)) + bill_total;
    cout << total_with_tip << endl;
    float amount_payable = total_with_tip / split;
    cout << "Each person should pay $" << setprecision(4) << amount_payable;

    return 0;
}