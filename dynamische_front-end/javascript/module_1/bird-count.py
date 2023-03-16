birds = [{'name': 'mus', 'key': 'm', 'count': 0},
         {'name': 'duif', 'key': 'd', 'count': 0},
         {'name': 'koolmees', 'key': 'k', 'count': 0},
         {'name': 'kraai', 'key': 'i', 'count': 0},
         ]

print('Bird counter until dot')

# 1) print all birds with key and name
for bird in birds:
    print(f"{bird['key']}: {bird['name']}")

# 2) define function get_bird_by_key(birds: list, key:str) returns bird or None
def get_bird_by_key(birds: list, key: str):
    for bird in birds:
        if bird['key'] == key:
            return bird
    return None

# 3) repeat until given '.'
#       input key of bird
while True:
    key = input("Enter bird key (or . to quit): ")
    if key == '.':
        break
    #    find bird with get_bird_by_key
    bird = get_bird_by_key(birds, key)
    #    if bird found:
    #       increment bird count
    #       show bird name and count
    if bird is not None:
        bird['count'] += 1
        print(f"{bird['name']} count: {bird['count']}")
    else:
        print('Invalid bird key')

# 4) print all birds with name and count
for bird in birds:
    print(f"{bird['name']} count: {bird['count']}")

# 5) print per bird also the percentage of the total count
total_count = sum([bird['count'] for bird in birds])
for bird in birds:
    percentage = bird['count'] / total_count * 100
    print(f"{bird['name']} count: {bird['count']}, percentage: {percentage:.2f}%")
