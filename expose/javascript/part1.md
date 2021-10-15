1. Line 9 prints "values added: 20", since result = 10+10 will store 20 into result
2. Line 13 prints "final result: 20". This is because var result has function scope, and will persist after the function returns.
3. Line 9 prints "values added: 20", since result = 10+10 will store 20 into result.
4. Line 13 returns an error stating result is not defined. This is because var result has block scope, and does not exist beyond the function block.
5.  Line 9 returns an error, since results cannot be reassigned because it is a const variable.
6. Line 13 returns an error stating result is not defined. This is because const result has block scope, and does not exist beyond the function block.