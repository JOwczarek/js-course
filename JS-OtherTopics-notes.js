/**
 * High-level - Javascript does not require management of computer 
 * resources. Easier to learn and use but less performance/optimization.
 * 
 * JS Engine- Programs that actually executes Javascript code. Every
 * browser has it's own engine, the most well known is Google's V8,
 * it powers googlechrome and node. All engines contain a call stack 
 * and a heap. Call stack is where the code is actually executed using
 * execution contexts. The heap is an unstructured memory pool and stores
 * all of the objects our code uses.
 * 
 * Interpreted or just-in-time compiled. Compile code is all turned into
 * machine code at once, it is then packed in a file to be executed on any
 * computer. Compiled and then executed.
 * 
 * Interpreted. Compiled and executed line by line. Much slower than 
 * compiled languages. Just-in-time compiled. Modern JS compiles first 
 * then executes immediatly.
 * 
 * Code is first parsed(read) into the abstract syntax tree(AST)
 * checks for syntax error, splits into meaningful chunks 
 * The generated AST is then compiled into machine code.
 * The machine-code is executed right away. The code is unoptimized 
 * so it can run immediatly, while running the code is recompiled and 
 * optimized during the already running execution. This can happen many
 * times.
 * 
 * Javascript runtime is usually the browser. Contains all of the things
 * needed to run javascript. Includes JS Engine(Heap, CallStack),
 * WebAPI's (DOM, Timers, fetch api, ect) accessed through global
 * window object, and callback queue(event happens, calls callback
 *  function, put on call stack to be executed).
 * 
 * Global execution context is created for top level of code in call 
 * stack after code is compiled. Top level code is any code not in a 
 * function. Only top level code is exectued first. Code in functions
 * is only executed when the function is called. There is only one
 * global execution context.
 * 
 * A new execution context is created for each function. When all 
 * functions are done executing the engine waits for callback functions 
 * to arrive(like associated with a click event);
 * 
 * In an execution context there is a variable enviroment where variables 
 * are stored. There is also an special arguments object that contains 
 * arguements passed into the function.  The scope chain is stored in 
 * each exectuion context. Each EC also gets a variable for the this 
 * context.
 *
 * Execution contexts belonging to arrow functions do not get their own
 * arguments object or this keyword. The can use the arguments object and 
 * this keyword of their closest function parent.
 * 
 * Exection contexts are stacked in the call stack. Their order is used 
 * to keep track of where the program is in exectuion.
 * 
 * Execution stacks contain: Variable environment scope chain and this 
 * keyword.
 * 
 * This- special variable that is created for every exectuion context 
 * (every function) Takes the value of (points to) the owner of the 
 * function in which the this keyword is used. This is not static, how it 
 * is called matters, and value is only assigned when it is called. In an 
 * object, a method is called. The this keyword points to the calling 
 * object. In calling a funtion not in an object, the this method is 
 * undefined in strict mode, in sloppy mode it points to the window.
 * This does NOT point to the function and does NOT point to the 
 * variable environment.
 * 
 * In arrow functions if you this keyword it uses the this of the parent 
 * function. They do not get their own the this keyowrd.
 * Do not use arrow functions in objects when you need to use the 
 * this keyword. It gets the this from the global scope and will return
 * undefined in strict mode or widow in sloppy. Do not use arrow functions
 * as a method(function in an object). Use function expressions.
 * 
 * If a function is called as an event listener then the this points to 
 * the dom element the listener is attached to.
 * 
 * Scoping is how our programs variables are organized and accessed
 * JS uses lexical scoping, scope is controlled by placement of functions
 * and blocks in the code.
 * Scope is the space or enviroment where a variable is declared(global 
 * scope, function scope and block scope.)
 * Scope of a variable- region where a certain variable can be accessed.
 * Variable lookup - looking up the scope chain at parent scopes for a 
 * variable. It is one direction parent cannot see child scope. 
 * let and const are block scoped, var is function scoped.
 * Var is hoisted. Calling a var variable before it is lexically declared 
 * will return undefined. Creating a variable with var creates a variable
 * on the window object. 
 * 
 * When calling a function within a method the function this is undefined.
 * You can create a reference to this in the method and pass the 
 * reference as an arguement into the nested function. (Pre Es6 solution)
 * The new solution is to use an arrow function. The arrow function uses
 * the parent this reference.
 * 
 * Just like this keyword, arguments keyword is only available in regular 
 * functions. Arguements keyword will return an array with the arguements
 * passed into the function. You can pass more arguements that the 
 * parameters allow and access them from the arguements array.
 * Arrow Function does not get its own arguements keyword. This is older 
 * way.
 * 
 * 
 * Garbage-collected - Memory is automatically allocated and freed when 
 * out of scope.
 * 
 * Multi-Paradigmed - Very flexible, Three popular paradigms are:
 * Proceedural Programming - code organizied linearly with some functions
 * OOP - 
 * Function Programming - 
 * Imperative of Declarative
 * 
 * Prototype-based object-oriented - most things in js are objects
 * 
 * First class functions- functions are treated like variables. You can 
 * pass functions into functions and return functions
 * 
 * Dynamically-typed language- do not need to declare type of variable
 * Javascript determins type for you
 * 
 * Concurrency model- how the javascript enging handles multiple tasks at
 * the same time.
 * 
 * Single-Threaded- runs on one thread, can only do one thing at a time. 
 * Does not block when long running tasks are running/waiting. They run 
 * in the background and return to the main thread once they have 
 * finished.
 * 
 * Primitive data types(number, string, bool, undefined, null, symbol, 
 * bigint). Are stored in execution contexts in the call stack. JS Engine 
 * creates a unique identifier for a variable and then memory is 
 * allocated for the value of the variable. All in the call stack. The 
 * identifier points to the address where the value is stored, not the 
 * value itself. Const only makes primitive types immutable. Data stored
 * on the heap can still be changed even if declared const.
 * 
 * Objects are reference types. All objects(reference types) are stored 
 * on the heap. Object idetifier points to a variable on the call stack, 
 * the value of the variable points to an address on the heap(it is a 
 * reference to the address on the heap), the value on the heap is the 
 * actual values of the object. Objects can be very large, that is why
 * they are stored on the heap, with a reference to them on the stack.
 * 
 * 
 */