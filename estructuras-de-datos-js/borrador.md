// 4

- ref 4 =
  value: 4
  next: null

newNode = ref 4
top = ref 4
bottom = ref 4
length = 1

// 8

- ref 8 =
  value: 8
  next: ref 4

newNode = ref 8
holdingPointer = ref 4
top = ref 8

bottom = ref 4
length = 2

// 12

- ref 12 =
  value: 12
  next: ref 8

newNode = ref 12
holdingPointer = ref 8
top = ref 12

bottom = ref 4
length = 3

// pop
newNode = ref 12
top = ref 12

bottom = ref 4
length = 3
