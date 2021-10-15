1. 3 will be printed. This is because var i has function scope, so it will continue to exist after the for loop is done iterating.
2. 150 will be printed. This is because var discountedPrice has function scope, so it will continue to exist after the for loop is done iterating.
3. 150 will be printed. This is because var discountedPrice has function scope, so it will continue to exist after the for loop is done iterating.
4. discounted which is an array of the following [50,100,150] will be returned. This is because discounted is a var and has function scope, thus will remain after the function finishes executing.
5. Line 12 returns an error stating result is not defined. This is because let i has block scope, and does not exist beyond the for loop.
6.  Line 13 returns an error stating result is not defined. This is because let discountedPrice has block scope, and does not exist beyond the for loop.
7.   Line 14 prints 150. This is because finalPrice has function scope and we are still in the function.
8.   The function will return [100,200,300]. This is because this it the value of discounted right before the function terminates, and the function will return the value of discounted.
9.   Line 13 returns an error stating result is not defined. This is because let i has block scope, and does not exist beyond the for loop.
10.  Line 12 will print 3 because length has function scope and we are still in the function.
11.  discounted which is an array of the following [50,100,150] will be returned. This is because discounted is a var and has function scope, thus will remain after the function finishes executing.
12.  A. student['name'];
        B.student['Grad Year'];
        C.student.greeting();
        D.student['Favorite Teacher']['name'];
        E.student['courseLoad'][0];
13.       A. '32' 2 is converted to a string and concatinated with '3'
          B. 1 , 3 is converted to a number and 2 is subtracted
          C. 3 , null is converted to number 0 and added to 3
          D. 3null, null is converted to a string and concatinated with 3
          E. 4 , true is converted to a number 1 and added to 3
          F. 0 , false and null are converted to number 0 and added to eachother
          G. 3undefined, undefined is converted to a string, and then concatinated to '3'
          H. NaN , a valid conversion was not able to be found, and an error gives NaN.
14.       A. true, '2' is converted to a number and 2>1 is true
          B. false, '12' and '2' are converted to a number and 2<12 is false
          C. true, '2' is converted to a number and 2==2 is true
          D. false, string '2' is not the same as number 2 
          E. false, true is converted to 1, and 1 == 2 is false
          F. true, Boolean(2) becomes true, and true === true becomes true
15. == operator attempts to perform type conversion on the compared values, then checks equality. === is strict equality, it compares two values without performing type conversion

17. [2,4,6] is returned. In the for loop, for each element in the passed array is passed to a callback function, doSomething(num) which returns double of whatever value is passed. Then the loop pushes that doubled value into a array that it returns.
19. 1 3 2 4