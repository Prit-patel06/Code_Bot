class ExplanationProvider {
    constructor() {
        this.explanations = {
            'variables': 'A variable is a named storage for data. It allows you to store, modify, and retrieve data in your programs.',
            'functions': 'A function is a reusable block of code that performs a specific task. It can take inputs, called parameters, and can return a value.',
            'loops': 'Loops are used to execute a block of code repeatedly until a specified condition is met. Common types include for loops and while loops.',
            'arrays': 'An array is a collection of items stored at contiguous memory locations. It allows you to store multiple values in a single variable.',
            'objects': 'An object is a collection of key-value pairs. It allows you to group related data and functions together.',
            // Add more topics and explanations as needed
        };
    }

    getExplanation(topic) {
        return this.explanations[topic] || 'Sorry, I do not have an explanation for that topic.';
    }
}

export default ExplanationProvider;
