/*
    Garbage Collection in JS

    * All modern browsers come with garbage collectors for JavaScript
      to free the unneeded memory.

    * Unlike C/C++, JavaScript has no explicit methods for clearing
      the memory.

    * The garbage collector has algorithms that can detect whether
      a reference or value is needed or not and can remove from the
      working memory.

    * The algorithms used in garbage collection are:
      * Reference-counting algorithm
      * Mark and Sweep algorithm
    
      * Reference-counting algorithm:
        
        Definition:
        ^^^^^^^^^^^
        An object is said to be "garbage", or collectible if there
        are zero references pointing to it.

        Limitations:
        ^^^^^^^^^^^^
        Circular references cannot be detected.

      * Mark and Sweep Algorithm:

        Definition:
        ^^^^^^^^^^^
        If an object is unreachable, it can be regarded as "garbage".

        Assumes a root object, traverses through the references, collects
        reachable and non-reachable objects.

        Non-reachable objects are removed from the memory.

        The limitation of circular references is solved in this algorithm.

        Limitations:
        ^^^^^^^^^^^^
        Explicitly manually freeing memory at certain parts of code is recommended.
        (by nullifying the value/reference).


*/