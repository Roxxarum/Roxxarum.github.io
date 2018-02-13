degree = [0, 90, 180, 270]
direction = ["North", "East", "South", "West"]

X = 2

if degree[X] < 360:
	print "Yes, that's true."

def isNotNorth():
	if direction != "North":
	# != means not equal
		print "Yes, it is not to the north."
	else:
		print "No, it is to the North."
isNotNorth()
# ^^^^ this calls / envokes the function

print degree[X]
print direction[X]
