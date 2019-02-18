const App = () => {
    return React.createElement('ul', {}, [
            React.createElement('li', 
                                {className: "text-danger"}, 
                                'brush up on react'),
            React.createElement('li', 
                                {className: "text-warning"},
                                 'practice more git commands'),
            React.createElement('li', 
                                {className: "text-primary"},
                                 'learn more js') 
        ]
    );
};