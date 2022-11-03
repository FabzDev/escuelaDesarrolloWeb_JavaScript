ref 4 = value: 4
next: null

ref 5 = value: 5
next: null

ref 4 = value: 4
next: ref 5
top = ref 5

// INICIO

top = null
bottom = null
length = 0
top = bottom

// 1
ref 1 = value: 1
next: null

newNode = ref 1
top = ref 1
bottom = ref 1
length = 1

// 2
ref 2 = value: 2
next: ref 1

newNode = ref 2
holdingPointer = ref 1
top = ref 2
bottom = ref 1
length = 2

// 3
