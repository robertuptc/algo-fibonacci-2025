def fibonacci(n):
  if n == 0 or n == 1:
    return n
  
  arr = [0, 1]
  previous = arr[0]
  current = arr[1]

  for x in range(1, n + 1, 1):
    while len(arr) != (n + 1):
        next = previous + current
        previous = current
        current = next
        arr.append(current)
  return arr[-1]