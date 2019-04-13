# python snippets

# single line comment

'''
multi line comment
'''

### Imports
# import module
# from module import class, function, variable
# import os # imports the os module

### Imports os & file manipulation
def demo_os():
    import os # import os module
    os.path.join(path_segment1, path_segment2)
    os.path_exists(path)
    os.listdir(directory_path)
    os.remove(file_path)
    os.rmdir(directory_path)

def demo_file():
    file = open(path, "rw")
    file.read()
    string.write("string")

### vairable assignments
def variable_assignment():
    theNumber = 1
    theString = 'string'
    theUnicodeString = u"unicode string"
    theMultiLineString = """"
    multi
    line
    string
    """

    theTuple = (element1, element2, element3)
    theList = [element1, element2, element3]
    theDictionary = {"key1": "value1", "key2": "value2", "key3": "value3"}
    theDictionary["key3"] = "value4"

    # theClassInstance = ClassName( init )

### built in types
def built_in_types():
    isTrue = True
    isFalse = False
    isNone = None
    isStr = str
    isUnicode = unicode
    isInt = int
    isFloat = float
    isList = list
    isDict = dict

### my function
def my_function( x, y, z=0 ):
    sum = x + y + z
    return sum

### my class
class MyClass( SuperClass ):
    class_variable = "static_value"

    def __init__( self, value1 ):
        self.instance_variable1 = "value1"
        self.instance_function()

    def instance_function( self, arg1 ):
        print('instance function body')
        return 0

### String Manipulations
def string_manipulations():
    string1 = "string1"
    string2 = "string2"

    string3 = string1 + string2
    "%s%s" % (string1, string2)

    string3.split("s",5)
    string3.strip()
    string3.startswwith("string")
    "ing1" in string1
    print(string2)

    string4 = "str" + "ing"
    
    "%s%s" % ("s", "g")

    "s/g".split("/")

    " string ".split()

    "str".startswith("s")

    "ss" in "mississippi"

### List Comprehension
def list_comprehension():
    [ value for value in list if condition ]
    [ x for x in [1,2,3,4,5,6,7,8,9] if x % 2 == 0 ]

### value assignment
def value_assignment():
    value = dictionary["key"]
    value = dictionary.get("key", "default value")
    [100,200,300,400,500,600,700,800,900][2]
    "stringify"[0:4]
    [100,200,300,400,500,600,700,800,900][2:4]
    value = ClassName.class_variable
    value = class_instance.instance_variable1
    value = class_instance.function(args)

### comparisons
def value_comparisons():
    value1 == value2
    value1 != value2
    value1 < value2
    value1 <= value2
    value1 > value2
    value1 >= value2
    value is [not] None
    value in list
    0 in [1,2,3,4]
    isinstance( class_instance, ClassName)

### basic arithmetic
def basic_arithmetic():
    i = a + b
    i = a / b
    i = a % b
    i = a - b
    i = a * b

### control flow
def control_flow_if():
    if i==7:
        print("seven")
    elif i==8:
        print("eight")
    else:
        print(str(1000))

def control_flow_for():
    for i in [1,2,3,4]:
        if i == 2:
            continue
        if i == 3:
            break
        print(i)

def control_flow_why():
    check = True
    while check == True:
        print "infinity"
        check = False

def try_catch_finally():
    try:
        database_update()
    except Exception as e:
        log.error(e.msg)
        database_abort()
    finally:
        database_commit()