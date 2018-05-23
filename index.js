module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true,
        "jquery": true
    },
    "rules": {
        //вызов функции до объявления
        "no-use-before-define": [
            "error",
            {
               "functions": false 
            }            
        ],
        "no-console": 0,
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,
                "exceptions": { 
                    "VariableDeclarator": true }
            }
        ],
        "one-var": [
            "error",
            "always"
        ],
        "one-var-declaration-per-line": [
            "error", 
            "always"
        ]
    }
};