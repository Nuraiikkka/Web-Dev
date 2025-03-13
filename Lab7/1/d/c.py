n = int(input())
arr=list(map(int, input().split()))
count = 0
for num in arr:
    if num > 0:
        count+=num
print(count)