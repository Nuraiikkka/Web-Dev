a = int(input())
b=int(input())
for num in (a, b+1):
    if num**2<=b:
        print(num**2)