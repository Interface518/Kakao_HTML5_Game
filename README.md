# Kakao HTML5 Game

#### 출력 방식
```javascript
console.log("Hello Javascript");
alert("Hello Javascript");
prompt("Hello Javascript");

var val1 = "1", val2 = "2", val3 = "3"
console.log(val1);
alert(val2);
prompt(val3);
```

#### 변수
```javascript
var a = 100;
var b = 3.14;
var c = "안녕하세요";
var d = "a"
var e = true
var f = false

console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c));
console.log(d,typeof(d));
console.log(e,typeof(e));
console.log(f,typeof(f));
```

#### 입력 방식
```javascript
var height = prompt("키를 입력해 주세요");
console.log(height, typeof(height));
```

#### 자료형 변환
```javascript
var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));
```

#### 객체(object)
```javascript
var man = {name:"홍길동", age:20, height:180 };
console.log(typeof(man));
console.log(man.name);
console.log(man["name"]);

man.name = "전우치";
console.log(man.name);

man["name"] = "이몽룡"
console.log(man.name);

console.log(man);
```

#### undefined, NULL
```javascript
var a; //undefined
var b = null //NULL
```

#### 연산자
```javascript
var a = 8;
var b = 7;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log(a++);
console.log(a);

console.log(++a);
console.log(a);

console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.random());
```

#### 함수
```javascript
console.log(test());

function test(){
    return 10;
}
```


#### 문자열
```javascript
var str = "Hello";
console.log(str.length);
console.log(str["length"]);

var str2 = " World"
var str3 = str.concat(str2);
console.log(str3)

var str4 = "Hello".concat(str2).concat("!")
console.log(str4)

console.log(str + str2)
console.log(str + str2 + "!")
```





