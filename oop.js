
// examples start


// const person = {
//   // name: ['Bob', 'Smith'],
//   name : {
//   first: 'Bob',
//   last: 'Smith'
// },
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio: function() {
//     alert(this.name['first'] + ' ' + this.name['last'] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   },
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name[0] + '.');
//   }

//   };

//   person.name.first = 'григорій';
//   person['name']['last'] = 'Нич';




// let myDataName = 'height';
// let myDataValue = '1.75m';
// person[myDataName] = person.name.first;





// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
//   return obj;
// }




// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
// }

// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');





// let person1 = new Object;
// person1 = {
//   name: 'Chris',
//   age: 38,
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   }
// }; 



// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first : first,
//     last: last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = function() {
//     alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   };
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name.first + '.');
//   };
// };

// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// examples end











// Task 1
// Usage example:
// const stud1 = new Student('Ivan Petrenko', 'web');
// stud1.nameIncludes('Ivan');   // true
// stud1.nameIncludes('Denysenko'); // false





class Students {
constructor (fullName, direction){
  this.fullName = fullName;
  this .direction = direction;
  this._direction = direction;

    }

showFullName() {
    return this.fullName; 
  } 

nameIncludes(data) {
  if (data == this.fullName) {
    return true;
  }
    return false;
}

static studentBuilder(){
  return newInstance;
}

get direction(){
  return this._direction;
}

set direction(value){
  if (value.length < 1) {
      alert("Direction name is too short");
      return;
    }
      this._direction = value;
    }
}


var newInstance = new Students ('Ihor Kohut', 'qc')
var stud1 = new Students ('Ivan Petrenko', 'web');
var stud2 = new Students ('Sergiy Koval', 'python');
var stud3 = Students.studentBuilder();
